const kebabCase = require("lodash.kebabcase")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
        group(field: frontmatter___tags, limit: 2000) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  const tags = result.data.allMdx.group
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: require.resolve("./src/templates/tags.tsx"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
