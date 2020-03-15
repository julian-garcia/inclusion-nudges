import React from "react"
import Modal from "../components/modal"
import emailjs from 'emailjs-com'

function sendMail(){
  const templateParams = {
    "reply_to": document.querySelector('#email').value,
    "subject": sessionStorage.getItem('subject'),
    "message_html": document.querySelector('.modal-form__textarea').value
  }
  if (templateParams.message_html && templateParams.reply_to) {
    emailjs.send('mailjet','inclusion_nudges', templateParams, process.env.GATSBY_EMAILJS_USERID)
    .then((response) => {
          console.log(response.status);
        }, (err) => {
          console.log(err);
        });
  }
}

const ModalContact = () => (
  <Modal modalClass="modal">
    <h1 className="modal-title">Contact Us</h1>
    <form className="modal-form">
      <label htmlFor="email" className="modal-form__label">Email</label><br />
      <input id="email" type="email" name="email" className="modal-form__input" required /><br />
      <label htmlFor="message" className="modal-form__label">Message</label><br />
      <textarea name="message" className="modal-form__textarea" required></textarea><br />
      <button onClick={sendMail} className="modal-form__button" type="button">Send</button>
    </form>
  </Modal>
)

export default ModalContact
