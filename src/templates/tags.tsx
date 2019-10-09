import React from "react"
// Components
import { Link, graphql } from "gatsby"

export const query = graphql`
  query($tag: String) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

const Tags = ({ pageContext, data: { allMdx } }) => {

  // const { tag } = pageContext
  const { edges, totalCount } = allMdx
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`
  return (
    <div>
      {/* <h1>{tagHeader}</h1> */}
      <ul>
        {edges.map(({ node }) => {
          const { slug, title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </div>
  )
}
export default Tags
