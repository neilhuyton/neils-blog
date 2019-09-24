import React from "react"

import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"
import usePosts from "../hooks/use-posts"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </Layout>
  )
}

export default IndexPage
