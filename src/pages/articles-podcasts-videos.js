import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostGridItem from "../components/post-grid-item"

const ExternalMediaPage = ({ data }) => {
  const externalMediaData = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Articles, Podcasts, Videos" />
      <div className="accent-1">
        <h2 className="text">Articles, Podcasts, Videos</h2>
      </div>
      <div className="post-grid">
        <div className="col founders">
          <h2>By the Founders</h2>
          <hr/>
          {externalMediaData.map(({node}, i) => (
            node.frontmatter.category === 'By the Founders' &&
            <PostGridItem key={i}
                          title={node.frontmatter.title} 
                          link={node.frontmatter.link} 
                          imageUrl={node.frontmatter.thumbnail} />
          ))}
        </div>
        <div className="col podcasts">
          <h2>Featured in podcasts</h2>
          <hr/>
          {externalMediaData.map(({node}, i) => (
            node.frontmatter.category === 'Featured in Podcasts' &&
            <PostGridItem key={i}
                          title={node.frontmatter.title} 
                          link={node.frontmatter.link} 
                          imageUrl={node.frontmatter.thumbnail} />
          ))}
        </div>
        <div className="col community">
          <h2>By people in this community</h2>
          <hr/>
          {externalMediaData.map(({node}, i) => (
            node.frontmatter.category === 'By people in this community' &&
            <PostGridItem key={i}
                          title={node.frontmatter.title} 
                          link={node.frontmatter.link} 
                          imageUrl={node.frontmatter.thumbnail} />
          ))}
        </div>
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