import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog-card"

const IndexPage = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {blogs.map(({ node: blog }) => {
        return (
          <BlogCard
            key={blog.frontmatter.title}
            title={blog.frontmatter.title}
            slug={blog.frontmatter.slug}
            date={blog.frontmatter.date}
            description={blog.frontmatter.description}
            className="my-6"
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
          }
        }
      }
    }
  }
`

export default IndexPage
