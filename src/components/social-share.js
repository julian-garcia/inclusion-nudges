import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import IconHandsWhiteImg from "../images/icon-hands-white.png"

const SocialShare = ({origin}) => (
  <>
    {/* <h2 className="page-heading">Share to inspire others</h2> */}
    <div className="accent-2" style={{textAlign:"center", position:"relative", padding:"2.5rem 1rem 2.5rem"}}>
      <h2 className="text share">Share with other people</h2>
      <picture>
        <source srcSet={IconHandsWhiteImg} />
        <img src={IconHandsWhiteImg} alt="Inclusion Nudges" className="icon icon-right" />
      </picture>
      <div>
        {origin === 'index' &&
        <>
          <a href="http://twitter.com/share?text=Want to make change for inclusion in your organisation and community? Check out The Inclusion Nudges Guidebook and the Action Guide Series for BehaviouralDesigns to make inclusion the norm.&url=https://inclusion-nudges.org&hashtags=diversity,equity,inclusion,BehaviouralDesigns,debias" target="_blank" rel="noopener noreferrer" className="modal-social-link">
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
        </>
        }
        {origin === 'blog' &&
        <>
          <a href="http://twitter.com/share?text=Check out the Inclusion Nudges blog. I found it really eye-opening with lots of practical behavioural designs how we can all make inclusion the norm.&url=https://inclusion-nudges.org/blog" target="_blank" rel="noopener noreferrer" className="modal-social-link">
          <FontAwesomeIcon icon={faTwitter} className="icon-heading large" style={{color:'white'}} />
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://inclusion-nudges.org/blog&title=&summary=Check out the Inclusion Nudges blog. I found it really eye-opening with lots of practical behavioural designs how we can all make inclusion the norm.&source=" target="_blank" rel="noopener noreferrer" className="modal-social-link">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading large" style={{color:'white'}} />
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://inclusion-nudges.org/blog" target="_blank" rel="noopener noreferrer" className="modal-social-link">
            <FontAwesomeIcon icon={faFacebookF} className="icon-heading large" style={{color:'white'}} />
          </a>
          <a href="mailto:info@example.com?&subject=&body=https://inclusion-nudges.org/blog Check out the Inclusion Nudges blog. I found it really eye-opening with lots of practical behavioural designs how we can all make inclusion the norm." target="_blank" rel="noopener noreferrer" className="modal-social-link">
            <FontAwesomeIcon icon={faEnvelope} className="icon-heading large" style={{color:'white'}} />
          </a>
        </>
        }
      </div>
    </div>
  </>
)

SocialShare.propTypes = {
  origin: PropTypes.string
}

SocialShare.defaultProps = {
  origin: 'index' 
}

export default SocialShare
