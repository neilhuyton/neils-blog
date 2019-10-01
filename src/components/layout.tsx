/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import Sidebar from "./sidebar"

export type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div id="wrapper">
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <div id="main">{children}</div>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default Layout
