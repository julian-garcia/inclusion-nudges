import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import IconHandsWhiteImg from "../images/icon-hands-white.png"

const SocialShare = () => (
  <>
    <h2 className="page-heading">Share to inspire others</h2>
    <div className="accent-2" style={{textAlign:"center", position:"relative", padding:"2.5rem 1rem 2.5rem"}}>
      <h3 className="text share">Share with other people<br />Let them know about The Inclusion&nbsp;Nudges&nbsp;Guidebook and the Action&nbsp;Guide&nbsp;Series</h3>
      <picture>
        <source srcSet={IconHandsWhiteImg} />
        <img src={IconHandsWhiteImg} alt="Inclusion Nudges" className="icon icon-right" />
      </picture>
      <div>
        <a href="https://twitter.com/home?status=https://inclusion-nudges.org Want to make change for #diversity, #equity, and #inclusion in your organisation and community? Check out The Inclusion Nudges Guidebook and the Action Guide Series. These how-to resources give you lots of #BehaviouralDesigns to #debias and make inclusion the norm. Who wouldn’t want that?  https://inclusion-nudges.org#inclusionnudges" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading large" style={{color:'white'}} />
        </a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://inclusion-nudges.org&title=&summary=Want to make change for #diversity, #equity, and #inclusion in your organisation and community? Check out The Inclusion Nudges Guidebook and the Action Guide Series. These how-to resources give you lots of #BehaviouralDesigns to #debias and make inclusion the norm. Who wouldn’t want that?  https://inclusion-nudges.org#inclusionnudges&source=" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading large" style={{color:'white'}} />
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finclusion-nudges.org%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faFacebookF} className="icon-heading large" style={{color:'white'}} />
        </a>
        <a href="mailto:?&subject=&body=Hi, I just visited the Inclusion Nudges global initiative website and thought you might find The Inclusion Nudges Guidebook and Action Guide Series relevant and inspiring. Check it out here: www.inclusion-nudges.orgThe Founders Lisa Kepinski and Tinna C. Nielsen also have a blog – you should check it out." target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon-heading large" style={{color:'white'}} />
        </a>
      </div>
    </div>
  </>
)

export default SocialShare
