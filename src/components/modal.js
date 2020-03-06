import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function closeModal(modalClass, e) {
  const classes = e.target.classList;
  if (!(classes.contains('modal-form') || 
        classes.contains('modal-form__input') ||
        classes.contains('modal-form__textarea') ||
        classes.contains('modal-form__label'))){
    document.querySelector(`.${modalClass}`).classList.remove('show');
  }
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
