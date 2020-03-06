import React, { useState } from "react"
import Modal from "../components/modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const ModalDownload = () => {
  const [sharedStatus, setSharedStatus] = useState(true);
  return (
  <Modal modalClass="modal-download">
    <h1 className="modal-title">Download a free taster</h1>
    <h2>Please pay with a Tweet / LinkedIn share</h2>
    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Finclusion-nudges.org&text=Check%20out%20%23InclusionNudges%20Guidebook%20you%20get%20101%20examples%20of%20behavioural%20insight%20design%20to%20%23debias%20%26%20make%20%23inclusion%20%26%20%23diversity%20the%20norm%20in%20your%20organisation%2C%20community%20and%20society.%20%20A%20%23HowTo%20guide%20for%20%23ChangeMakers%21" target="_blank" rel="noopener noreferrer" className="modal-social-link" onClick={() => setSharedStatus(false)}>
      <FontAwesomeIcon icon={faTwitter} className="modal-social-icon" />
    </a>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Finclusion-nudges.org%2F" target="_blank" rel="noopener noreferrer" className="modal-social-link" onClick={() => setSharedStatus(false)}>
      <FontAwesomeIcon icon={faLinkedin} className="modal-social-icon" />
    </a>
    <button className="modal-form__button" disabled={sharedStatus}>Download</button>
  </Modal>
  )
}

export default ModalDownload
