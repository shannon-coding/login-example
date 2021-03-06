import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from "../components/login";

const IndexPage = () => (
  <Layout>
    <SEO title="Login Page"/>
    <Login />
  </Layout>
)

export default IndexPage
