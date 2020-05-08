import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import IconHandsWhiteImg from "../images/icon-hands-white.png"

const SocialShare = () => (
  <>
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
  </>
)

export default SocialShare
