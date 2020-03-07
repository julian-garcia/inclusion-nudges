import React from "react"
import Modal from "../components/modal"
import addToMailchimp from "gatsby-plugin-mailchimp"

const _signup = async () => {
  const email = document.querySelector('#emailSignup').value;
  const name = document.querySelector('#name').value;
  const gdpr = document.querySelector('#gdpr').value;
  if (email && name && gdpr) { await addToMailchimp(email, {'NAME': name, 'gdpr[3549]': gdpr}) }
}

const ModalSignup = () => (
  <Modal modalClass="modal-signup">
    <h1 className="modal-title">Updates</h1>
    <h2>If you want an update about Inclusion Nudges a couple of times a year, all you need to do is sign up with your email here</h2>
    <form className="modal-form">
      <label htmlFor="name" className="modal-form__label">Name</label><br />
      <input id="name" type="text" name="name" className="modal-form__input" required /><br />
      <label htmlFor="email" className="modal-form__label">Email</label><br />
      <input id="emailSignup" type="email" name="email" className="modal-form__input" required /><br />
      <label htmlFor="gdpr" className="modal-form__label gdpr">Opt in to allow us to send emails to you:
        <input type="checkbox" id="gdpr" name="gdpr[3549]" className="modal-form__checkbox" value="Y" />
        <span className="modal-form__check"></span>
      </label>
      <button className="modal-form__button" onClick={_signup}>Receive updates</button>
    </form>
  </Modal>
)

export default ModalSignup
