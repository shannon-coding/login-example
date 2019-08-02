import auth0js from 'auth0-js'

export const isBrowser = typeof window !== 'undefined'

let profile = false

const auth0 = isBrowser ? new auth0js.WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENTID,
  responseType: 'token id_token',
  scope: 'openid profile email',
  redirectUri: process.env.AUTH0_CALLBACK,
}) : {}

export const getAccessToken = () => {
  return localStorage.getItem('access_token')
}

const getUser = () => {
  return new Promise((resolve, reject) => {
    // If the user has already logged in, don’t bother fetching again.
    if (profile) {
      resolve(profile)
      return
    }

    const accessToken = getAccessToken()

    if (!isLoggedIn()) {
      resolve("no user name")
      return
    }

    auth0.client.userInfo(accessToken, (err, userProfile) => {
      if (err) {
        reject(err)
        return;
      }

      profile = userProfile
      resolve(profile)
    })
  })
}

export const getUserNickname = () => isBrowser ? localStorage.getItem("nickname") : ''

export const getUserProfileImage = () => isBrowser ? localStorage.getItem("profile_image") : ''

export const getUserEmail = () => isBrowser ? localStorage.getItem("email") : ''

const setUserDetails = user => {
  if (!isBrowser) return false
  localStorage.setItem("email", `${user.email}`)
  localStorage.setItem("nickname", `@${user.nickname}`)
  localStorage.setItem("profile_image", `${user.picture}`)
}

const setSession = authResult => {
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  )

  localStorage.setItem('access_token', authResult.accessToken)
  localStorage.setItem('id_token', authResult.idToken)
  localStorage.setItem('expires_at', expiresAt)

  return true
}

export const login = () => {
  if(!isBrowser){
    return
  }

  auth0.authorize()
}

export const handleAuthentication = callback => {
  if (!isBrowser) return null
  auth0.parseHash(async (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      setSession(authResult)
      setUserDetails(await getUser())
      callback()
    } else if (err) {
      console.error(err)
    }
  })
}

export const isLoggedIn = () => {
  if (!isBrowser) return null
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
  return new Date().getTime() < expiresAt
}

export const logout = callback => {
  if (!isBrowser) return null
  auth0.logout();
  localStorage.removeItem('access_token')
  localStorage.removeItem('id_token')
  localStorage.removeItem('expires_at')
  localStorage.removeItem('nickname')
  localStorage.removeItem('profile_image')
  localStorage.removeItem('email')
}