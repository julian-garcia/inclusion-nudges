import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const BlogPostPage = ({ data }) => {
  const mediumData = data.allSitePage.edges[0].node.context;
  return (
    <Layout>
      <SEO title={mediumData.title} canonical={mediumData.link} />
      <div className="accent-4">
        <h2 className="text" dangerouslySetInnerHTML={{ __html: mediumData.title }}></h2>
      </div>
      <div className="social-share">
        <a href={`${mediumData.guid}/share/facebook?source=inclusion-nudges`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="icon-heading large" />
        </a><br/>
        <a href={`${mediumData.guid}/share/twitter?source=inclusion-nudges`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading large" />
        </a><br/>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${mediumData.guid}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading large" />
        </a>
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