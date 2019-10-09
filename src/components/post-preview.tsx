import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// import Image from "./image"

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ImageProps,
  PostPreview,
  PostProps,
  PostPreviewRenderLinkProps,
} from "@neilhuyton/neils-storybook"

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

export default (post: PostProps) => {
  return (
    <PostPreview
      {...post}
      image={post.image.sharp.fluid}
      renderLink={RenderLink}
      renderImage={RenderImage}
    />
  )
}
