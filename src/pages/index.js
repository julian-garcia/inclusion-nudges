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
import Slider from "../components/slider"

import NudgesImg from "../images/nudges.png"
import IconHandsWhiteImg from "../images/icon-hands-white.png"
import InitiativeImg from "../images/initiative.png"
import FoundersImg from "../images/founder-video-poster.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"
import TinnaImg from "../images/tinna-tedx.jpg"
import LisaImg from "../images/lisa-tedx.png"
import PublicationsImg from "../images/publications.png"
import TedXImg from "../images/ted-x.png"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text"><strong>Inclusion Nudges is a change methodology</strong> developed by Lisa Kepinski and Tinna C. Nielsen based on extensive experience as global change makers combined with their background in behavioural sciences</h3>
    </div>
    <h2 className="page-heading">Inclusion Nudges Guidebook</h2>
    <div className="row-left-aside">
      <picture style={{textAlign:"center"}}>
        <source srcSet={NudgesImg} />
        <img src={NudgesImg} alt="Inclusion Nudges" className="nudges-image" />
      </picture>
      <div className="paragraphs-large-text">
        <h3>WHAT</h3>
        <p>More than 100 examples of Inclusion Nudges.<br />Inclusion Nudges are designed interventions based on insights from behavioural and social sciences & stuck patterns for inclusion.</p>
        <h3>HOW</h3>
        <p>We share with you HOW you can apply and design Inclusion Nudges to minimise the impact of unconscious bias in systems, processes, cultures, and behaviours.</p>
        <p>Each example <strong>EMPOWERS you</strong> <br />to change your organisation, community, and society to be inclusive by default and norm</p>
        <h3 style={{marginBottom:`1rem`, fontSize:`1.3rem`}}><Link to='/'>Order your guide book</Link></h3>
        <button onClick={() => showModal('modal-download','Download a free taster')} className="unstyled-button apply-link-style">Download a free taster</button>
        <button onClick={() => showModal('modal-signup',`Inclusion Nudges global movement and community. It’s free to join – we are in it for the impact`)} className="unstyled-button apply-link-style" style={{display:'block', marginTop:'1rem'}}>Join us - stay updated</button>
      </div>
    </div>
    <Slider testimonials={data} />
    <h2 className="page-heading">Actions you can take & assistance you can get</h2>
    <div className="row-auto centered actions">
      <div className="accent-3">
        <h2>Connect & Learn</h2> 
        <p><strong>Community<br/>online platform</strong></p>
        <button onClick={() => showModal('modal','Join to connect & learn')} className="contact-us unstyled-button">Join</button>
      </div>
      <div className="accent-2">
        <h2>Get online coaching</h2>
        <p><strong>from the experts<br />Lisa & Tinna</strong></p>
        <button onClick={() => showModal('modal','Get online coaching')} className="contact-us unstyled-button">Write us</button>
      </div>
      <div className="accent-4">
        <h2>Share your Inclusion Nudge</h2> 
        <p><strong>examples<br />to inspire others</strong></p>
        <button onClick={() => showModal('modal','Share your Inclusion Nudge')} className="contact-us unstyled-button">Write us</button>
      </div>
      <div className="accent-1">
        <h2>Get bespoke design support</h2>
        <p><strong>by collaborating<br />with Tinna & Lisa</strong></p>
        <button onClick={() => showModal('modal','Get bespoke design support')} className="contact-us unstyled-button">Write us</button>
      </div>
    </div>
    <h2 className="page-heading">Learn more</h2>
    <div className="row-auto bottom">
      <div className="grid-item-image" style={{backgroundImage:`url(${InitiativeImg})`}}>
        <h2>Why we started the Inclusion Nudges Initiative?</h2> 
        <p><button onClick={() => showModal('modal-video-1')} className="unstyled-button">The Founders</button></p>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${TinnaImg})`}}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        <h2>Nudging behaviour for a more inclusive world</h2>
        <p><button onClick={() => showModal('modal-video-2')} className="unstyled-button">TEDx Talk by Tinna C. Nielsen</button></p>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${LisaImg})`}}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        <h2>Mitigating bias in talent decisions</h2> 
        <p><button onClick={() => showModal('modal-video-3')} className="unstyled-button">TEDx Talk by Lisa Kepinski</button></p>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${PublicationsImg})`}}>
        <h2>Writings, Podcasts, Videos</h2>
        <p><Link to="/articles-podcasts-videos" className="unstyled-button">Free Resources<br />Articles & Podcasts</Link></p>
      </div>
    </div>
    <div className="accent-2" style={{textAlign:"center", position:"relative", padding:"1rem 1rem .5rem"}}>
      <h3 className="text share">Share with others<br />Let them know about Inclusion Nudges & the Inclusion&nbsp;Nudges&nbsp;Guidebook</h3>
      <picture>
        <source srcSet={IconHandsWhiteImg} />
        <img src={IconHandsWhiteImg} alt="Inclusion Nudges" className="icon icon-right" />
      </picture>
      <div>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Finclusion-nudges.org&text=Check%20out%20%23InclusionNudges%20Guidebook%20you%20get%20101%20examples%20of%20behavioural%20insight%20design%20to%20%23debias%20%26%20make%20%23inclusion%20%26%20%23diversity%20the%20norm%20in%20your%20organisation%2C%20community%20and%20society.%20%20A%20%23HowTo%20guide%20for%20%23ChangeMakers%21" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading" style={{color:'white'}} />
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Finclusion-nudges.org%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading" style={{color:'white'}} />
        </a>
      </div>
    </div>
    <ModalVideo videoClass="modal-video-1"
                videoUrl={FoundersVideo}
                placeHolder={FoundersImg}
                subtitles={FoundersVTT} />
    <ModalVideo videoClass="modal-video-2"
                videoUrl="https://www.youtube.com/embed/VggAqa0xOwM" 
                placeHolder="" />
    <ModalVideo videoClass="modal-video-3"
                videoUrl="https://www.youtube.com/embed/4DpZm0GNqfQ" 
                placeHolder="" />
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