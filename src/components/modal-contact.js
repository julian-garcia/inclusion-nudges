// import { Link } from "gatsby"
import React from "react"
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function sendMail(){
  const templateParams = {
    "reply_to": document.querySelector('#email').value,
    "to_name": "Inclusion Nudges",
    "message_html": document.querySelector('.modal-form__textarea').value
  }
  if (templateParams.message_html && templateParams.reply_to) {
    emailjs.send('default_service','julian-garcia.uk', templateParams, process.env.EMAILJS_USERID)
    .then((response) => {
          console.log(response.status);
        }, (err) => {
          console.log(err);
        }).catch(function(e) {
          console.error(e); 
          console.log(templateParams, process.env.EMAILJS_USERID);
        });
  }
}

function closeContactModal() {
  document.querySelector('.modal').classList.remove('show');
}

export function showContactModal() {
  document.querySelector('.modal').classList.add('show');
}

const ModalContact = () => (
  <div className="modal">
    <div className="modal__content">
      <FontAwesomeIcon icon={faTimes} className="icon-heading" onClick={closeContactModal} />
      <h1 className="modal-title">Contact Us</h1>
      <form className="modal-form">
        <label htmlFor="email" className="modal-form__label">Email</label><br />
        <input id="email" type="email" name="email" className="modal-form__input" required /><br />
        <textarea name="message" className="modal-form__textarea" required></textarea><br />
        <button onClick={sendMail} className="modal-form__button">Send</button>
      </form>
    </div>
  </div>
)

export default ModalContact
