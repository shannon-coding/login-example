import PropTypes from "prop-types"
import React from "react"
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2">
          {siteTitle}
        </Typography>
      </Grid>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
