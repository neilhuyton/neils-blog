import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

// eslint-disable-next-line import/no-extraneous-dependencies
import { ImageProps, LinkProps, Post } from "@neilhuyton/neils-storybook"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
        summary
        title
      }
      body
    }
  }
`

const RenderImage = (props: ImageProps) => <Img fluid={props} />

const RenderLink = ({ children, className, slug = "", title }: LinkProps) => (
  <Link to={slug} className={className}>
    {children ? children : title}
  </Link>
)
const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Post
      {...post.frontmatter}
      body={<MDXRenderer>{post.body}</MDXRenderer>}
      image={post.frontmatter.image.sharp.fluid}
      renderImage={RenderImage}
      renderLink={RenderLink}
    />
  </Layout>
)

export default PostTemplate
