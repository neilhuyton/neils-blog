import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            author
            date(formatString: "MMMM, DD YYYY")
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            slug
            summary
            tags
            title
          }

          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    ...post.frontmatter,
    excerpt: post.excerpt,
  }))
}

export default usePosts
