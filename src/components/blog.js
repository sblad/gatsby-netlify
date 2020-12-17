import React from "react"
import Layout from "./layout"

function Blog({ data }) {
  return (
    <Layout>
      <article>
        <h1 className="text-3xl text-green-400 uppercase font-bold mb-2">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <time className="text-sm text-gray-400">
          {data.markdownRemark.frontmatter.date}
        </time>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Blog
