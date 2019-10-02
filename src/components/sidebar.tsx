import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// eslint-disable-next-line import/no-extraneous-dependencies
import { Sidebar } from "@neilhuyton/neils-storybook"
import usePosts from "../hooks/use-posts"

const RenderLink = ({
  children,
  className,
  slug = "",
  title,
}: PostPreviewRenderLinkProps) => (
  <Link to={slug} className={className}>
    {children ? children : title}
  </Link>
)

const RenderImage = (props: ImageProps) => <Img fluid={props} />

export default () => {
  const posts = usePosts()
  const transformedPosts = posts.map(post => {
    post.renderLink = RenderLink
    post.renderImage = RenderImage
    post.image = post.image.sharp.fluid

    return post
  })
  return <Sidebar posts={transformedPosts} />
}
