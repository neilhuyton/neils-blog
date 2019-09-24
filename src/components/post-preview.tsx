import React from "react"
import { Link } from "gatsby"

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PostPreview,
  PostPreviewProps,
  PostPreviewRenderLinkProps,
} from "neils-storybook"

const RenderLink = ({ slug = "", title }: PostPreviewRenderLinkProps) => (
  <Link to={slug}>{title}</Link>
)

export default (post: PostPreviewProps) => (
  <PostPreview {...post} renderLink={RenderLink} />
)
