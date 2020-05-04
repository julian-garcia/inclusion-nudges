import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const mediumPostsData = data.allSitePage.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="accent-2">
        <h2 className="text">Blog</h2>
      </div>
      <div className="post-grid blog">
        {mediumPostsData.map((post, i) => (
          post.node.context.link &&
          <div key={i}>
            <Link to={`/blog/${post.node.context.title.toLowerCase().replace(/\s/g,'-')}`} dangerouslySetInnerHTML={{ __html: post.node.context.title }}></Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const mediumPostsQuery = graphql`
  query {
    allSitePage(filter: {context: {link: {ne: null}}}) {
      edges {
        node {
          context {
            title
            link
          }
        }
      }
    }
  }
`