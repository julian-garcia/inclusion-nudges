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
        classes.contains('modal-form__button') ||
        classes.contains('modal-form__input') ||
        classes.contains('modal-form__textarea') ||
        classes.contains('modal-form__check') ||
        classes.contains('modal-form__checkbox') ||
        classes.contains('modal-form__label'))){
    document.querySelector(`.${modalClass}`).classList.remove('show');
  }
  const video = document.querySelector(`.${modalClass} video`);
  const iframe = document.querySelector(`.${modalClass} iframe`);
  
  if (video) { video.pause() }
	if (iframe) { const iframeSrc = iframe.src; iframe.src = iframeSrc; }
}

export function showModal(modalClass) {
  document.querySelector(`.${modalClass}`).classList.add('show');
}

const Modal = ({ children, modalClass }) => (
  <div className={modalClass} onClick={(e) => closeModal(modalClass, e)}>
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
