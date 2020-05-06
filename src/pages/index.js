import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal, { showModal } from "../components/modal"
import ModalVideo from "../components/modal-video"
import ModalDownload from "../components/modal-download"
import ModalContact from "../components/modal-contact"
import ModalSignup from "../components/modal-signup"
import ModalBook from "../components/modal-book"
import Slider from "../components/slider"
import EventList from "../components/event-list"

import NudgesImg from "../images/guidebook.png"
import NudgesImgSmall from "../images/guidebook-small.png"
import IconHandsWhiteImg from "../images/icon-hands-white.png"
import InitiativeImg from "../images/initiative.png"
import FoundersImg from "../images/founder-video-poster.png"
import FoundersVideo from "../videos/founders.mp4"
import FoundersVTT from "file-loader!../videos/founders.vtt"
import TinnaImg from "../images/tinna-tedx.jpg"
import LisaImg from "../images/lisa-tedx.png"
import PublicationsImg from "../images/publications.png"
import TedXImg from "../images/ted-x.png"
import Hub1Img from "../images/hub1.jpg"
import Hub2Img from "../images/hub2.jpg"
import Hub3Img from "../images/hub3.jpg"
import Hub4Img from "../images/hub4.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text"><strong>Inclusion Nudges is a change methodology</strong> developed in 2013 by <a href="https://www.amazon.com/Lisa-Kepinski/e/B086QZH4HJ/ref=dp_byline_cont_book_1" target="_blank" rel="noopener noreferrer">Lisa&nbsp;Kepinski</a> and <a href="https://www.amazon.com/Tinna-C-Nielsen/e/B086Q6TP2Q/ref=dp_byline_cont_book_2" target="_blank" rel="noopener noreferrer">Tinna&nbsp;C.&nbsp;Nielsen</a><br className="desktop-only"/> based on our extensive experience as global change makers combined with our background in behavioural sciences</h3>
    </div>
    <h2 className="page-heading">Inclusion Nudges Guidebook</h2>
    <div className="row-left-aside">
      <button onClick={() => showModal('modal-purchase')} className="unstyled-button nudges-image-button">
        <picture style={{textAlign:"center"}}>
          <source media="(min-width: 550px)" srcSet={NudgesImg} />
          <source media="(min-width: 0px)" srcSet={NudgesImgSmall}></source>
            <img src={NudgesImg} alt="Inclusion Nudges" className="nudges-image" />
        </picture>
      </button>
      <div style={{marginTop:'1rem'}}>
        <h2>What</h2>
        <h3 className="headline">Inclusion Nudges are <strong>practical designs</strong> to influence the unconscious mind to automatically be inclusive in daily actions, leadership, and decision-making. Inclusion Nudges are redesign of processes, reframing of perceptions, as well as eye-openers that motivate and engage people in making inclusion the new normal everywhere, for everyone.</h3>
        <h3 className="headline">The Inclusion Nudges Guidebook is a collection of <strong>100 how-to examples</strong> designed based on behavioural and social sciences and insights about stuck patterns for inclusion. These are all designed and applied by us and a global community of change makers who share their own proven examples.</h3>
        <h2>How</h2>
        <h3 className="headline">This Inclusion Nudges Guidebook shows <strong>step by step how you can</strong> apply Inclusion Nudges in your organisation, community, and society - basically everywhere. We share with you how you can minimise the impact of cognitive bias in systems, processes, cultures, and behaviours to benefit from the diversity of people, and stay agile and innovative, perform better and create a more sustainable future for us all. <br/><strong>You make it happen!</strong></h3>
      </div>
    </div>
    <div className="row-auto indented-row guide-book-links">
      <button onClick={() => showModal('modal-purchase')} className="dark modal-form__button guidebook-link">Purchase your<br/> Guidebook&nbsp;now</button>
      <button onClick={() => showModal('modal-download')} className="modal-form__button guidebook-link">Download a<br/> Quick&nbsp;Guide</button>
      <button onClick={() => showModal('modal-signup')} className="modal-form__button guidebook-link">Join to<br/> stay&nbsp;updated</button>
      <button onClick={() => showModal('modal-share','Share your Inclusion Nudges','Share your Inclusion Nudge')} className="modal-form__button guidebook-link">Share your<br/> Inclusion&nbsp;Nudges</button>
    </div>
    <Slider testimonials={data} />
    <h2 className="page-heading">The Inclusion&nbsp;Nudges Hub - How you can make it happen now</h2>
    <div className="row-auto centered actions">
      <div className="action-container">
        <div className="accent-3" onClick={() => showModal('modal-connect')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-connect')}>
          <div className="vertical-center">
            <h2>Join our webinars</h2>
            <p><strong>Web sessions to learn<br/> about Inclusion Nudges</strong></p>
            <button onClick={() => showModal('modal-connect')} className="contact-us unstyled-button">Book now</button>
          </div>
        </div>
        <div className="action-image" style={{backgroundImage:'url(' + Hub1Img + ')'}}></div>
      </div>
      <div className="action-container">
        <div className="action-image" style={{backgroundImage:'url(' + Hub2Img + ')'}}></div>
        <div className="accent-2" onClick={() => showModal('modal','Get online coaching','Write us')} role="button" tabIndex={0} onKeyPress={() => showModal('modal','Get online coaching','Write us')}>
          <div className="vertical-center">
            <h2>Get online coaching</h2>
            <p><strong>from the experts<br />Lisa & Tinna</strong></p>
            <button onClick={() => showModal('modal','Get online coaching','Write us')} className="contact-us unstyled-button">Write us</button>
          </div>
        </div>
      </div>
      <div className="action-container">
        <div className="accent-4" onClick={() => showModal('modal-booking')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-booking')}>
          <div className="vertical-center">
            <h2>Book talks & learning</h2> 
            <p><strong>in-person or virtual</strong><br/>&nbsp;</p>
            <button onClick={() => showModal('modal-booking')} className="contact-us unstyled-button">Book now</button>
          </div>
        </div>
        <div className="action-image" style={{backgroundImage:'url(' + Hub3Img + ')'}}></div>
      </div>
      <div className="action-container">
        <div className="action-image" style={{backgroundImage:'url(' + Hub4Img + ')'}}></div>
        <div className="accent-1" onClick={() => showModal('modal','Get design support','Write us')} role="button" tabIndex={0} onKeyPress={() => showModal('modal','Get design support','Write us')}>
          <div className="vertical-center">
            <h2>Get design support</h2>
            <p><strong>by collaborating<br />with Tinna & Lisa</strong></p>
            <button onClick={() => showModal('modal','Get design support','Write us')} className="contact-us unstyled-button">Write us</button>
          </div>
        </div>
      </div>
    </div>
    <h2 className="page-heading">Learn more</h2>
    <div className="row-auto bottom">
      <div className="grid-item-image" style={{backgroundImage:`url(${InitiativeImg})`}} onClick={() => showModal('modal-video-1')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-1')}>
        <h2 className="grid-item-title">Why we started the Inclusion Nudges Initiative?</h2> 
        <h2>The Founders</h2>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${TinnaImg})`}} onClick={() => showModal('modal-video-2')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-2')}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        <h2 className="grid-item-title">Nudging behaviour for a more inclusive world</h2>
        <h2>TEDx Talk by Tinna C. Nielsen</h2>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${LisaImg})`}} onClick={() => showModal('modal-video-3')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-video-3')}>
        <img src={TedXImg} alt="Tedx" className="image-tedx" />
        <h2 className="grid-item-title">Mitigating bias in talent decisions</h2> 
        <h2>TEDx Talk by Lisa Kepinski</h2> 
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${PublicationsImg})`}} >
        <Link to="/articles-podcasts-videos" className="unstyled-button"></Link>
        <h2 className="grid-item-title">Resources</h2>
        <h2>Writings, Podcasts, Videos</h2>
      </div>
    </div>
    <h2 className="page-heading">Share to inspire others</h2>
    <div className="accent-2" style={{textAlign:"center", position:"relative", padding:"1rem 1rem .5rem"}}>
      <h3 className="text share">Share with others<br />Let them know about Inclusion Nudges & the Inclusion&nbsp;Nudges&nbsp;Guidebook</h3>
      <picture>
        <source srcSet={IconHandsWhiteImg} />
        <img src={IconHandsWhiteImg} alt="Inclusion Nudges" className="icon icon-right" />
      </picture>
      <div>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Finclusion-nudges.org&text=Check%20out%20%23InclusionNudges%20Guidebook.%20You%20get%20100%20examples%20of%20behavioural%20%23designs%20to%20%23debias%20%26%20make%20%23inclusion%20%26%20%23diversity%20the%20norm%20in%20your%20organisation%2C%20community%20and%20society.%20%20A%20%23HowTo%20guide%20for%20%23ChangeMakers%21" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading large" style={{color:'white'}} />
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Finclusion-nudges.org%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading large" style={{color:'white'}} />
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finclusion-nudges.org%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faFacebookF} className="icon-heading large" style={{color:'white'}} />
        </a>
        <a href="mailto:?subject=Inclusion%20Nudges&body=Hi!%20I%20just%20visited%20this%20website%20and%20thought%20you%20might%20find%20the%20Inclusion%20Nudges%20global%20initiative%20and%20the%20Inclusion%20Nudges%20Guidebook%20interesting.%20%0Awww.inclusion-nudges.org" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon-heading large" style={{color:'white'}} />
        </a>
      </div>
    </div>
    <h2 className="page-heading">Inclusion Nudges Blog</h2>
    <div className="row-auto indented-row blog" style={{gap:'1rem'}}>
      {data.allSitePage.edges.map((post, i) => (
        post.node.context.link && i < 3 &&
        <div key={i}>
          <Link to={`/blog/${post.node.context.title.toLowerCase().replace(/\s/g,'-')}`} dangerouslySetInnerHTML={{ __html: post.node.context.title }}></Link>
        </div>
      ))}
      <div>
        <Link to='/blog' className="modal-form__button" style={{margin:'0'}}>More blog posts...</Link>
      </div>
    </div>
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
    <ModalDownload />
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
    <ModalContact modalClass='modal-share'>
      <p style={{textAlign:'center'}}>Write us and let us know what kind of inclusive designs that work for you.<br/>You only share with us here.<br/>
      We will collaborate with you and explore what you have done and how, and based on our conversation decide if we can publish your example in the next Inclusion Nudges Guidebook.</p>
    </ModalContact>
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