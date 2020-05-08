import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/modal"
import ModalVideo from "../components/modal-video"
import ModalSignup from "../components/modal-signup"
import ModalBook from "../components/modal-book"
import Slider from "../components/slider"
import EventList from "../components/event-list"
import SocialShare from "../components/social-share"
import Hub from "../components/hub"
import Headline from "../components/headline"
import Media from "../components/media"
// import Blog from "../components/blog"

import FoundersImg from "../images/founder-video-poster.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text"><strong>Inclusion Nudges is a change methodology</strong> developed in 2013 by <a href="https://www.amazon.com/Lisa-Kepinski/e/B086QZH4HJ/ref=dp_byline_cont_book_1" target="_blank" rel="noopener noreferrer">Lisa&nbsp;Kepinski</a> and <a href="https://www.amazon.com/Tinna-C-Nielsen/e/B086Q6TP2Q/ref=dp_byline_cont_book_2" target="_blank" rel="noopener noreferrer">Tinna&nbsp;C.&nbsp;Nielsen</a><br className="desktop-only"/> based on our extensive experience as global change makers combined with our background in behavioural sciences</h3>
    </div>
    <Headline links={data} />
    <Slider testimonials={data} />
    <Hub />
    <Media />
    <SocialShare />
    {/* <Blog posts={data} /> */}
    <ModalBook />
    <ModalVideo videoClass="modal-video-1"
                videoUrl={FoundersVideo}
                placeHolder={FoundersImg}
                subtitles={FoundersVTT}
                signature="Lisa Kepinski and Tinna C. Nielsen" 
                roles="The Inclusion Nudges Founders and Authors" />
    <ModalVideo videoClass="modal-video-2"
                videoUrl="https://www.youtube.com/embed/VggAqa0xOwM" 
                placeHolder=""
                signature="Tinna C. Nielsen"
                roles="Co-Founder and Co-author" />
    <ModalVideo videoClass="modal-video-3"
                videoUrl="https://www.youtube.com/embed/4DpZm0GNqfQ" 
                placeHolder=""
                signature="Lisa Kepinski"
                roles="Co-Founder and Co-author" />
    <ModalSignup />
    <Modal modalClass='modal-connect'>
      <div style={{textAlign:'center'}}>
        <h3 className="modal-title">Web Sessions</h3>
        <h4 style={{marginBottom:'1rem'}}>A conversation with the authors about Inclusion Nudges and the Guidebook</h4>
        <p>Join the founders and authors, Tinna C. Nielsen & Lisa Kepinski, in a conversation.<br/>
        We want to hear what challenges you face when promoting inclusion, diversity, belonging, and equality. We share ways Inclusion Nudges can help address these.</p>
        <h4 style={{marginBottom:'1rem'}}>Sign up for a web session:</h4>
        <EventList events={data} />
      </div>
    </Modal>
    <Modal modalClass='modal-purchase'>
      <div style={{textAlign:'center'}}>
        <h3 className="modal-title">Purchase your Guidebook</h3>
        <p>The book is available for sale through Amazon. Select the Amazon link below for your location or the one closest to you.</p>
        <p>Note: Due to the Corona crisis lock down, the book is only available on Amazon.com in the US – please select one of the other sites for outside the US.</p>
        <p>If you experience that none of the Amazon sites ship to your country, please write us on <a href="mailto:contact@inclusion-nudges.org" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold'}}>contact@inclusion-nudges.org</a> with your address, telephone number and number of books. We will send you an invoice via Pay Pal and ship the book after payment is received. The fee will be the price of the book on Amazon, packaging, and shipping cost.</p>
        <div className="row-auto" style={{gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'1rem'}}>
          <a href="https://www.amazon.com/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com</a>
          <a href="https://www.amazon.ca/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.ca</a>
          <a href="https://www.amazon.co.jp/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.jp</a>
          <a href="https://www.amazon.co.uk/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.uk</a>
          <a href="https://www.amazon.de/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.de</a>
          <a href="https://www.amazon.es/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.es</a>
          <a href="https://www.amazon.fr/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.fr</a>
          <a href="https://www.amazon.it/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.it</a>
        </div>
        <br/>
      </div>
    </Modal>
  </Layout>
)

export default IndexPage

export const testimonialsQuery = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date, frontmatter___sequence, frontmatter___title],
      order: ASC
    }) {
      edges {
        node {
          frontmatter {
            title
            position
            organisation
            testimonial
            date
            link
            category
            thumbnail
          }
        }
      }
    }
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