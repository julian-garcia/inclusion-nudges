import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { showModal } from "../components/modal"
const slugify = require('slugify')

const blogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const postUrl = `https://inclusion-nudges.org/blog/${slugify(frontmatter.category, {lower: true})}/${slugify(frontmatter.slug, {lower: true})}`;
  const postTitle = frontmatter.title.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ');
  return (
    <Layout siteTitle={`THE INCLUSION NUDGES BLOG<br/>Let’s make inclusion the norm everywhere, for everyone!`} alignment='center'>
      <SEO title={postTitle} />
      <div className="accent-1">
        <h2 className="text colour-accent-3" style={{textAlign: 'center'}}>Don’t miss out. Stay informed about new blog posts. <span role="button" tabIndex="0" className="colour-accent-3" style={{cursor:'pointer'}} onClick={() => showModal('modal-signup-blog')} onKeyPress={() => {}}>Subscribe <span style={{color:'white'}}>HERE</span></span></h2>
      </div>
      <div className="blog-post blog-post__feature" style={{paddingBottom:0}}>
        <h2 style={{textAlign:'left'}}>{postTitle}</h2>
        <h3 className="blog-post__authors">By <Link to="founders">{frontmatter.authors}</Link></h3>
        <img src={frontmatter.thumbnail} alt="" />
        <div className="blog-post__social-share">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-share__link" />
          </a><br/>
          <a href={`https://twitter.com/home?status=${postUrl} ${postTitle}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-share__link" />
          </a><br/>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-share__link" />
          </a><br/>
          <a href={`mailto:?&subject=${postTitle}&body=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="social-share__link" />
          </a>
        </div>
      </div>
      <div className="blog-post the-blog" dangerouslySetInnerHTML={{ __html: html }}></div>
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
        authors,
        thumbnail,
        slug,
        category
      }
    }
  }`