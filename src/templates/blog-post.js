import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const blogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="accent-1">
        <h2 className="text" dangerouslySetInnerHTML={{ __html: frontmatter.title }}></h2>
      </div>
      <div className="indented-row blog-post__feature">
        <img src={frontmatter.thumbnail} alt="" />
        <div className="blog-post__social-share">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-share__link" />
          </a><br/>
          <a href={`https://twitter.com/home?status=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-share__link" />
          </a><br/>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=&summary=&source=`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-share__link" />
          </a><br/>
          <a href={`mailto:?&subject=&body=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="social-share__link" />
          </a>
        </div>
      </div>
      <div className="blog-post" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default blogPost

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title,
        thumbnail,
        slug
      }
    }
  }`