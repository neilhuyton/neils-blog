/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import OverlayContext from "../context/OverlayContext"

import Footer from "./footer"
import Header from "./header"
import Sidebar from "./sidebar"

import { Menu } from "@neilhuyton/neils-storybook"

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
    <OverlayContext.Consumer>
      {overlay => {
        return (
          <>
            <div
              id="wrapper"
              // onClick={overlay.isOpen ? overlay.toggleOverlay : undefined}
            >
              <Header
                menuLinks={data.site.siteMetadata.menuLinks}
                toggleOverlay={overlay.toggleOverlay}
              />
              <div id="main">{children}</div>
              <Sidebar />
              <Footer />
            </div>
            <Menu
              isOpen={overlay.isOpen}
              menuLinks={data.site.siteMetadata.menuLinks}
              toggleOverlay={overlay.toggleOverlay}
            />
          </>
        )
      }}
    </OverlayContext.Consumer>
  )
}

export default Layout
