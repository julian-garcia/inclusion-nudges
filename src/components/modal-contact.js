import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import emailjs from 'emailjs-com'
import addToMailchimp from "gatsby-plugin-mailchimp"

function sendMail(){
  const templateParams = {
    "reply_to": document.querySelector('.show #email').value,
    "name": document.querySelector('.show #fullname').value,
    "subject": sessionStorage.getItem('subject'),
    "message_html": document.querySelector('.show .modal-form__textarea').value
  }
  if (templateParams.message_html && templateParams.reply_to) {
    emailjs.send('smtp_server','inclusion_nudges', templateParams, process.env.GATSBY_EMAILJS_USERID)
    .then((response) => {
          console.log(response.status);
          typeof window !== "undefined" && window.gtag &&
          window.gtag("event", "click", 
                      {'event_category':'Email',
                      'event_label':'Website enquiry: ' + sessionStorage.getItem('subject')});
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

const ModalContact = ({ children, modalClass, signature }) => (
  <Modal modalClass={modalClass} signature={signature}>
    <h3 className="modal-title">Contact Us</h3>
    {children}
    <form className="modal-form">
      <label htmlFor="email" className="modal-form__label">Email</label><br />
      <input id="email" type="email" name="email" className="modal-form__input" required /><br />
      <label htmlFor="fullname" className="modal-form__label">Name</label><br />
      <input id="fullname" type="text" name="fullname" className="modal-form__input" /><br />
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

Modal.propTypes = {
  modalClass: PropTypes.string,
  signature: PropTypes.string,
}

Modal.defaultProps = {
  modalClass: 'modal',
  signature: 'both'
}

export default ModalContact
