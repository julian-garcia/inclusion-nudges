import React from "react"
import Modal, { showModal } from "../components/modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import addToMailchimp from "gatsby-plugin-mailchimp"

const _signup = async () => {
  const email = document.querySelector('#emailDownload').value;
  const name = document.querySelector('#nameDownload').value;
  const gdpr = document.querySelector('#gdprDownload').checked ? 'Y' : 'N';
  if (email && name && gdpr) { 
    await addToMailchimp(email, {'FULLNAME': name, 'gdpr[3537]': gdpr}, process.env.GATSBY_MAILCHIMP_FREE);
    await addToMailchimp(email, {'NAME': name, 'gdpr[3549]': gdpr});
    showModal('modal-download-confirm');
  }
}

const ModalDownload = () => {
  function socialShare(url) {
    window.open(url, '_blank', "noopener,noreferrer");
  }
  return (
  <>
    <Modal modalClass="modal-download">
      <h3 className="modal-title">Download the Inclusion&nbsp;Nudges Quick&nbsp;Guide</h3>
      <p style={{textAlign:'center'}}>Yes, thank you! Send me a free taster of the Inclusion&nbsp;Nudges&nbsp;Guidebook</p>
      <form className="modal-form">
        <label htmlFor="nameDownload" className="modal-form__label">Name</label><br />
        <input id="nameDownload" type="text" name="name" className="modal-form__input" required /><br />
        <label htmlFor="emailDownload" className="modal-form__label">Email</label><br />
        <input id="emailDownload" type="email" name="email" className="modal-form__input" required /><br />
        <label htmlFor="gdprDownload" className="modal-form__label gdpr">Opt in to allow us to send you emails - it's the only way we can send you the free taster:
          <input type="checkbox" id="gdprDownload" name="gdpr[3537]" className="modal-form__checkbox" value="Y" />
          <span className="modal-form__check"></span>
        </label>
        <button className="modal-form__button" onClick={_signup} type="button">Send me the Inclusion&nbsp;Nudges Quick&nbsp;Guide</button>
      </form>
    </Modal>
    <Modal modalClass="modal-download-confirm">
      <h3 className="modal-title">Thank you, please pay with a Tweet or a LinkedIn share</h3>
      <div style={{textAlign:'center'}} className="modal-social-icons">
        <FontAwesomeIcon icon={faTwitter} className="modal-social-icon apply-link-style" onClick={(e) => socialShare('https://twitter.com/intent/tweet?url=https%3A%2F%2Finclusion-nudges.org&text=Check%20out%20%23InclusionNudges%20Guidebook%20you%20get%20101%20examples%20of%20behavioural%20insight%20design%20to%20%23debias%20%26%20make%20%23inclusion%20%26%20%23diversity%20the%20norm%20in%20your%20organisation%2C%20community%20and%20society.%20%20A%20%23HowTo%20guide%20for%20%23ChangeMakers%21')} />
        <FontAwesomeIcon icon={faLinkedinIn} className="modal-social-icon apply-link-style" onClick={(e) => socialShare('https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Finclusion-nudges.org%2F')} />
      </div>
    </Modal>
  </>
  )
}

export default ModalDownload
