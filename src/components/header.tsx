import React from "react"
import { Link } from "gatsby"

// eslint-disable-next-line import/no-extraneous-dependencies
import { Header, LinkProps } from "@neilhuyton/neils-storybook"

const RenderLink = ({ children, className, slug = "", title }: LinkProps) => (
  <Link to={slug} className={className}>
    {children ? children : title}
  </Link>
)

export default ({ menuLinks }) => (
  <Header
    title="Neil Huyton"
    slug="/"
    renderLink={RenderLink}
    menuLinks={menuLinks}
  />
)
