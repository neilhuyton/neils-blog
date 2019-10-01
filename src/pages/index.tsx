import React from "react"

import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"
import usePosts from "../hooks/use-posts"

// eslint-disable-next-line import/no-extraneous-dependencies
import { PostProps } from "neils-storybook"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map((post: PostProps) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </Layout>
  )
}

export default IndexPage
