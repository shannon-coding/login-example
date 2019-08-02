/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./header"

const useStyles = makeStyles(theme =>({
  body:{
    minHeight: "87vh",
    direction: "columns",
    justify: "center",
    alignItems: "center",
    border: 'solid',
  },
}));

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles();

  return (
    <>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Grid>
        {children}
        <Grid item xs={12}>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">GatsbyJS</a>
          </footer>
        </Grid>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
