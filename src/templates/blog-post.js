import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostPage = ({ data }) => {
  const mediumData = data.allSitePage.edges[0].node.context;
  return (
    <Layout>
      <SEO title={mediumData.title} canonical={mediumData.link} />
      <div className="accent-4">
        <h2 className="text" dangerouslySetInnerHTML={{ __html: mediumData.title }}></h2>
      </div>
      <div className="blog-post" dangerouslySetInnerHTML={{ __html: mediumData.content }}></div>
    </Layout>
  )
}

export default BlogPostPage

export const mediumQuery = graphql`
  query($path: String!) {
    allSitePage(filter: {path: {eq: $path}}) {
      edges {
        node {
          context {
            title
            pubDate
            link
            guid
            author
            thumbnail
            description
            content
          }
        }
      }
    }
  }
`