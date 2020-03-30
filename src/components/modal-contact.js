import React from "react"
import Modal from "../components/modal"
import emailjs from 'emailjs-com'
import addToMailchimp from "gatsby-plugin-mailchimp"

function sendMail(){
  const templateParams = {
    "reply_to": document.querySelector('.modal #email').value,
    "subject": sessionStorage.getItem('subject'),
    "message_html": document.querySelector('.modal .modal-form__textarea').value
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
    const gdpr = document.querySelector('#gdprConnect').checked ? 'Y' : 'N';
    await addToMailchimp(email, {}, process.env.GATSBY_MAILCHIMP_WEBCASTS);
    await addToMailchimp(email, {'gdpr[3549]': gdpr});
  }
}

const ModalContact = () => (
  <Modal modalClass="modal" signature={true}>
    <h3 className="modal-title">Contact Us</h3>
    <form className="modal-form">
      <label htmlFor="email" className="modal-form__label">Email</label><br />
      <input id="email" type="email" name="email" className="modal-form__input" required /><br />
      <label htmlFor="message" className="modal-form__label">Message</label><br />
      <textarea name="message" className="modal-form__textarea" required></textarea><br />
      <div className="gdpr-box">
        <label htmlFor="gdprConnect" className="modal-form__label gdpr">
          Opt in to allow us to send you emails – it’s the only way we can stay in touch:
          <input type="checkbox" id="gdprConnect" className="modal-form__checkbox" value="Y" />
          <span className="modal-form__check"></span>
        </label>
      </div>
      <button onClick={sendMail} className="modal-form__button" type="button">Send</button>
    </form>
  </Modal>
)

export default ModalContact
