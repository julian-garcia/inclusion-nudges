import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/modal"
import ModalVideo from "../components/modal-video"
import ModalSignup from "../components/modal-signup"
import ModalBook from "../components/modal-book"
import ModalPurchase from "../components/modal-purchase"
import Slider from "../components/slider"
// import EventList from "../components/event-list"
import SocialShare from "../components/social-share"
import Hub from "../components/hub"
import Headline from "../components/headline"
import Books from "../components/books"
import Media from "../components/media"
// import Blog from "../components/blog"

import FoundersImg from "../images/founder-video-poster.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text" style={{fontSize:'1.1rem'}}><strong>Inclusion Nudges is a change approach</strong> developed in 2013 by <Link to="/founders">Lisa&nbsp;Kepinski</Link> and <Link to="/founders">Tinna&nbsp;C.&nbsp;Nielsen</Link><br className="desktop-only"/> based on our extensive experience as global change makers for inclusion combined with our background in behavioural sciences</h3>
    </div>
    <Headline links={data} />
    <Books />
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
        <h4 style={{marginBottom:'1rem'}}>New dates coming soon</h4>
        {/* <h4 style={{marginBottom:'1rem'}}>Sign up for a web session:</h4>
        <EventList events={data} /> */}
      </div>
    </Modal>
    <ModalPurchase />
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