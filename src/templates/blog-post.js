import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalPurchase from "../components/modal-purchase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { showModal } from "../components/modal"
import LeaderImg from "../images/ag-leaders.png"
import TalentImg from "../images/ag-talent-selection.png"
import AlliesImg from "../images/ag-motivating-allies.png"
import GuideFrontImg from "../images/guidebook-front.png"
import QuickReadImg from "../images/quick-read.png"
const slugify = require('slugify')

const blogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const firstCategory = frontmatter.category.split(',')[0];
  const postUrl = `https://inclusion-nudges.org/blog/${slugify(firstCategory, {lower: true})}/${slugify(frontmatter.slug, {lower: true})}`;
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
        <p className="blog-post__authors">By <Link to="founders">{frontmatter.authors}</Link></p>
        <img src={frontmatter.thumbnail} alt="" />
        <div className="blog-post__social-share">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-share__link" />
          </a><br/>
          <a href={`http://twitter.com/share?text=${postTitle}&url=${postUrl}`} target="_blank" rel="noreferrer">
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
      <div className="blog-post the-blog" style={{paddingBottom:0}}>
        <p><img src={QuickReadImg} alt="" className="quick-read" /> { Math.ceil(html.split(' ').length / 200) } minute read</p>
      </div>
      <div className="blog-post the-blog" dangerouslySetInnerHTML={{ __html: html }}></div>
      <div className="blog-post the-blog">
        <h2 style={{marginTop:0}}>Want to learn more?</h2>
        <p>The Inclusion Nudges Guidebook (2020) for change makers gives you 100 examples of Inclusion Nudges</p>
        <div className="row-left-aside" 
             style={{gridTemplateColumns:'1fr 10fr', margin: 0, cursor:'pointer'}}
             onClick={() => showModal('modal-purchase')} role="button" onKeyPress={() => {}} tabIndex="0">
          <div>
            <img src={GuideFrontImg} alt="" style={{width:'100%'}} />
          </div>
          <div>
            <p>Inclusion Nudges Guidebook</p>
          </div>
        </div>
        <p style={{marginTop:'2rem'}}>The Action Guide series are shorter plug-and-play guides with 30 targeted Inclusion Nudges:</p>
        <div className="row-left-aside" 
             style={{gridTemplateColumns:'1fr 10fr', margin: 0, cursor:'pointer'}}
             onClick={() => showModal('ag-leaders-purchase')} role="button" onKeyPress={() => {}} tabIndex="0">
          <div>
            <img src={LeaderImg} alt="" style={{width:'100%'}} />
          </div>
          <div>
            <p>Inclusion Nudges for Leaders</p>
          </div>
        </div>
        <div className="row-left-aside" 
             style={{gridTemplateColumns:'1fr 10fr', margin: 0, cursor:'pointer'}}
             onClick={() => showModal('ag-talent-purchase')} role="button" onKeyPress={() => {}} tabIndex="0">
          <div>
            <img src={TalentImg} alt="" style={{width:'100%'}} />
          </div>
          <div>
            <p>Inclusion Nudges for Talent Selection</p>
          </div>
        </div>
        <div className="row-left-aside" 
             style={{gridTemplateColumns:'1fr 10fr', cursor:'pointer'}}
             onClick={() => showModal('ag-allies-purchase')} role="button" onKeyPress={() => {}} tabIndex="0">
          <div>
            <img src={AlliesImg} alt="" style={{width:'100%'}} />
          </div>
          <div>
            <p>Inclusion Nudges for Motivating Allies</p>
          </div>
        </div>
        <p>You can learn more and get other free resources on the Inclusion Nudges platform <Link to="/">inclusion-nudges.org</Link></p>
      </div>
      <ModalPurchase />
      <ModalPurchase modalClass="ag-leaders-purchase" />
      <ModalPurchase modalClass="ag-talent-purchase" />
      <ModalPurchase modalClass="ag-allies-purchase" />
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