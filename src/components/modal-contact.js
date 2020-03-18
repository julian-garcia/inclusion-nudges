import React from "react"
import Modal from "../components/modal"
import emailjs from 'emailjs-com'
import addToMailchimp from "gatsby-plugin-mailchimp"

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
    signup(templateParams.reply_to);
  }
}

async function signup(email) {
  const mailingList = sessionStorage.getItem('mailingList');
  if (email && mailingList === 'webcasts') {
    await addToMailchimp(email, {}, process.env.GATSBY_MAILCHIMP_WEBCASTS);
  }
}

const ModalContact = () => (
  <Modal modalClass="modal">
    <h3 className="modal-title">Contact Us</h3>
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
