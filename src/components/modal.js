import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import LogoImg from "../images/logo-small.jpg"
import SignatureImg from "../images/signature.png"

function closeModal(modalClass, e) {
  const classes = e.target.classList;
  if (!(classes.contains('modal__content') || 
        classes.contains('modal-social-icons') || 
        classes.contains('modal-form') || 
        classes.contains('modal-form__input') ||
        classes.contains('modal-form__select') ||
        classes.contains('modal-form__textarea') ||
        classes.contains('modal-form__check') ||
        classes.contains('modal-form__checkbox') ||
        classes.contains('modal-form__label') ||
        e.target.tagName === 'VIDEO')){
    document.querySelector(`.${modalClass}`).classList.remove('show');
  }
  const video = document.querySelector(`.${modalClass} video`);
  const iframe = document.querySelector(`.${modalClass} iframe`);
  
  if (video) { video.pause() }
	if (iframe) { const iframeSrc = iframe.src; iframe.src = iframeSrc; }
}

export function showModal(modalClass, modalTitle, buttonName, mailingList) {
  const modal = document.querySelector(`.${modalClass}`);
  const modalTitleElement = modal.querySelector('.modal-title');
  const modalButtonElement = modal.querySelector('.modal-form__button');
  const gdprBox = modal.querySelector('.gdpr-box');

  sessionStorage.removeItem('subject');
  sessionStorage.removeItem('mailingList');

  if (modalTitle) { sessionStorage.setItem('subject', modalTitle); }
  if (modalTitle) { modalTitleElement.textContent = modalTitle; }
  if (gdprBox) { gdprBox.classList.remove('show'); }

  if (mailingList) { 
    sessionStorage.setItem('mailingList', mailingList); 
    if (mailingList === 'webcasts') {
      modal.querySelector('.gdpr-box').classList.add('show');
    }
  }

  if (modalButtonElement) {
    if (buttonName) { 
      modalButtonElement.textContent = buttonName; 
    }
  }
  modal.classList.add('show');
}

const Modal = ({ children, modalClass, signature }) => (
  <div className={modalClass} role="button" onClick={(e) => closeModal(modalClass, e)} onKeyDown={(e) => closeModal(modalClass, e)} tabIndex={0}>
    <div className="modal__content">
      <img src={LogoImg} alt="Inclusion Nudges" className="modal-logo" />
      <FontAwesomeIcon icon={faTimes} className="icon-heading close-modal" onClick={(e) => closeModal(modalClass, e)} />
      {children}
      {signature &&
        <img src={SignatureImg} alt="Lisa & Tinna" className="modal-signature" />
      }
    </div>
  </div>
)

Modal.propTypes = {
  modalClass: PropTypes.string.isRequired,
  signature: PropTypes.bool
}

Modal.defaultProps = {
  signature: true 
}

export default Modal
