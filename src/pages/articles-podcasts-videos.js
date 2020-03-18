import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExternalMediaPage = ({ data }) => {
  const filteredData = data.allMarkdownRemark.edges.filter((item) => {
    if (item.node.frontmatter.category) { return true; }
    return false;
  });
  return (
    <Layout>
      <SEO title="Articles, Podcasts, Videos" />
      <div className="accent-1">
        <h2 className="text">Articles, Podcasts, Videos</h2>
      </div>
      <div className="post-grid">
        {filteredData.map(({node}, i) => (
          node.frontmatter.category &&
          <div className="post-grid__item" key={`post-grid__item${i}`}>
            {/* <h3 className="post-grid__title">{node.frontmatter.title}</h3> */}
            <a href={node.frontmatter.link} className="post-grid__title" target="_blank" rel="noopener noreferrer">
              {node.frontmatter.title}
            </a>
            <a href={node.frontmatter.link} className="post-grid__link" target="_blank" rel="noopener noreferrer">
              <img src={node.frontmatter.thumbnail} className="post-grid__image" alt="Feature" />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ExternalMediaPage

export const externalMediaQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            category
            link
            thumbnail
          }
        }
      }
    }
  }
`