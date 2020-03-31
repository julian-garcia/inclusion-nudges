import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import ModalVideo from "../components/modal-video"
import ModalDownload from "../components/modal-download"
import ModalSignup from "../components/modal-signup"
import ModalBook from "../components/modal-book"
import Slider from "../components/slider"

import NudgesImg from "../images/guidebook.png"
import IconHandsWhiteImg from "../images/icon-hands-white.png"
import InitiativeImg from "../images/initiative.png"
import FoundersImg from "../images/founder-video-poster.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"
import TinnaImg from "../images/tinna-tedx.jpg"
import LisaImg from "../images/lisa-tedx.png"
import PublicationsImg from "../images/publications.png"
import TedXImg from "../images/ted-x.png"
import SignatureTinnaImg from "../images/signature-tinna.png"
import SignatureLisaImg from "../images/signature-lisa.png"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text"><strong>Inclusion Nudges is a change methodology</strong> developed by Lisa Kepinski and Tinna C. Nielsen<br className="desktop-only"/> based on extensive experience as global change makers combined with their background in behavioural sciences</h3>
    </div>
    <h2 className="page-heading">Inclusion Nudges Guidebook</h2>
    <div className="row-left-aside">
      <picture style={{textAlign:"center"}}>
        <source srcSet={NudgesImg} />
        <img src={NudgesImg} alt="Inclusion Nudges" className="nudges-image" />
      </picture>
      <div style={{marginTop:'1rem'}}>
        <h2>What</h2>
        <h3 className="headline">100 how-to examples of Inclusion Nudges.<br />Inclusion Nudges are designed interventions based on insights from behavioural and social sciences and address stuck patterns for inclusion.</h3>
        <h2>How</h2>
        <h3 className="headline">We share with you how you can apply and design Inclusion Nudges to minimise the impact of unconscious bias in systems, processes, cultures, and behaviours.</h3>
        <h3 className="headline">Each example empowers you <br />to change your organisation, community, and society to be inclusive by default and norm</h3>
        <div className="row-auto guide-book-links">
          <Link to='/' className="dark modal-form__button guidebook-link">Purchase your Guidebook</Link>
          <button onClick={() => showModal('modal-download')} className="modal-form__button guidebook-link">Download a Quick&nbsp;Guide</button>
          <button onClick={() => showModal('modal-signup')} className="modal-form__button guidebook-link">Join to stay updated</button>
          <button onClick={() => showModal('modal','Share your Inclusion Nudges','Share your Inclusion Nudge')} className="modal-form__button guidebook-link">Share your Inclusion&nbsp;Nudges</button>
        </div>
      </div>
    </div>
    <Slider testimonials={data} />
    <h2 className="page-heading">Actions to make it happen</h2>
    <div className="row-auto centered actions">
      <div className="accent-3">
        <div className="vertical-center">
          <h2>Connect & learn</h2> 
          <p><strong>Webcasts to understand <br/>this change approach</strong></p>
          <button onClick={() => showModal('modal','Connect and Learn','Book now','webcasts')} className="contact-us unstyled-button">Book now</button>
        </div>
      </div>
      <div className="accent-2">
        <div className="vertical-center">
          <h2>Get online coaching</h2>
          <p><strong>from the experts<br />Lisa & Tinna</strong></p>
          <button onClick={() => showModal('modal','Get online coaching','Write us')} className="contact-us unstyled-button">Write us</button>
        </div>
      </div>
      <div className="accent-4">
        <div className="vertical-center">
          <h2>Book talks & masterclasses</h2> 
          <p><strong>in-person or virtual</strong><br/>&nbsp;</p>
          <button onClick={() => showModal('modal-booking')} className="contact-us unstyled-button">Book now</button>
        </div>
      </div>
      <div className="accent-1">
        <div className="vertical-center">
          <h2>Get bespoke design support</h2>
          <p><strong>by collaborating<br />with Tinna & Lisa</strong></p>
          <button onClick={() => showModal('modal','Get bespoke design support','Write us')} className="contact-us unstyled-button">Write us</button>
        </div>
      </div>
    </div>
    <h2 className="page-heading">Learn more</h2>
    <div className="row-auto bottom">
      <div className="grid-item-image" style={{backgroundImage:`url(${InitiativeImg})`}} onClick={() => showModal('modal-video-1')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-1')}>
        <h2>Why we started the Inclusion Nudges Initiative?</h2> 
        <h2>The Founders</h2>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${TinnaImg})`}} onClick={() => showModal('modal-video-2')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-2')}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        <h2>Nudging behaviour for a more inclusive world</h2>
        <h2>TEDx Talk by Tinna C. Nielsen</h2>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${LisaImg})`}} onClick={() => showModal('modal-video-3')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-3')}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        <h2>Mitigating bias in talent decisions</h2> 
        <h2>TEDx Talk by Lisa Kepinski</h2> 
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${PublicationsImg})`}} >
        <Link to="/articles-podcasts-videos" className="unstyled-button"></Link>
        <h2>Writings, Podcasts, Videos</h2>
        <h2>Free Resources<br />Articles & Podcasts</h2>
      </div>
    </div>
    <div className="accent-2" style={{textAlign:"center", position:"relative", padding:"1rem 1rem .5rem"}}>
      <h3 className="text share">Share with others<br />Let them know about Inclusion Nudges & the Inclusion&nbsp;Nudges&nbsp;Guidebook</h3>
      <picture>
        <source srcSet={IconHandsWhiteImg} />
        <img src={IconHandsWhiteImg} alt="Inclusion Nudges" className="icon icon-right" />
      </picture>
      <div>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Finclusion-nudges.org&text=Check%20out%20%23InclusionNudges%20Guidebook.%20You%20get%20100%20examples%20of%20behavioural%20%23designs%20to%20%23debias%20%26%20make%20%23inclusion%20%26%20%23diversity%20the%20norm%20in%20your%20organisation%2C%20community%20and%20society.%20%20A%20%23HowTo%20guide%20for%20%23ChangeMakers%21" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading" style={{color:'white'}} />
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Finclusion-nudges.org%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading" style={{color:'white'}} />
        </a>
      </div>
    </div>
    <ModalBook />
    <ModalVideo videoClass="modal-video-1"
                videoUrl={FoundersVideo}
                placeHolder={FoundersImg}
                subtitles={FoundersVTT} />
    <ModalVideo videoClass="modal-video-2"
                videoUrl="https://www.youtube.com/embed/VggAqa0xOwM" 
                placeHolder=""
                signature={SignatureTinnaImg} />
    <ModalVideo videoClass="modal-video-3"
                videoUrl="https://www.youtube.com/embed/4DpZm0GNqfQ" 
                placeHolder=""
                signature={SignatureLisaImg} />
    <ModalDownload />
    <ModalSignup />
  </Layout>
)

export default IndexPage

export const testimonialsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            position
            organisation
            testimonial
          }
        }
      }
    }
  }
`