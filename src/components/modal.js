import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import LogoImg from "../images/logo-small.jpg"
import SignatureImg from "../images/signature.png"
import SignatureLisaImg from "../images/signature-lisa.png"
import SignatureTinnaImg from "../images/signature-tinna.png"

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
        classes.contains('modal-form__privacy') ||
        e.target.id === 'playpause' ||
        e.target.id === 'volume' ||
        e.target.id === 'mute' ||
        e.target.tagName === 'IMG' ||
        e.target.tagName === 'VIDEO')){
    document.querySelector(`.${modalClass.replace(' ','.')}`).classList.remove('show');
  
    const video = document.querySelector(`.${modalClass} video`);
    const iframe = document.querySelector(`.${modalClass} iframe`);
    
    if (video) { video.pause() }
    if (iframe) { const iframeSrc = iframe.src; iframe.src = iframeSrc; }
  }
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
      {signature === 'both' &&
        <img src={SignatureImg} alt="Lisa & Tinna" className="modal-signature" />
      }
      {signature === 'lisa' &&
        <img src={SignatureLisaImg} alt="Lisa" className="modal-signature-single" />
      }
      {signature === 'tinna' &&
        <img src={SignatureTinnaImg} alt="Tinna" className="modal-signature-single" />
      }
    </div>
  </div>
)

Modal.propTypes = {
  modalClass: PropTypes.string.isRequired,
  signature: PropTypes.string
}

Modal.defaultProps = {
  signature: 'both' 
}

export default Modal
