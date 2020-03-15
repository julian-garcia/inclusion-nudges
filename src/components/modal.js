import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function closeModal(modalClass, e) {
  const classes = e.target.classList;
  if (!(classes.contains('modal__content') || 
        classes.contains('modal-social-icon') || 
        classes.contains('modal-social-link') || 
        classes.contains('modal-form') || 
        classes.contains('modal-form__input') ||
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

export function showModal(modalClass, modalTitle) {
  sessionStorage.removeItem('subject');
  sessionStorage.setItem('subject', modalTitle);
  const modal = document.querySelector(`.${modalClass}`);
  const modalTitleElement = modal.querySelector('.modal-title');
  if (modalTitle) {
    modalTitleElement.textContent = modalTitle;
  }
  modal.classList.add('show');
}

const Modal = ({ children, modalClass }) => (
  <div className={modalClass} role="button" onClick={(e) => closeModal(modalClass, e)} onKeyDown={(e) => closeModal(modalClass, e)} tabIndex={0}>
    <div className="modal__content">
      <FontAwesomeIcon icon={faTimes} className="icon-heading close-modal" onClick={(e) => closeModal(modalClass, e)} />
      {children}
    </div>
  </div>
)

Modal.propTypes = {
  modalClass: PropTypes.string.isRequired
}

export default Modal
