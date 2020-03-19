import React from "react"
import Modal from "../components/modal"
import addToMailchimp from "gatsby-plugin-mailchimp"

const _signup = async () => {
  const email = document.querySelector('#emailSignup').value;
  const name = document.querySelector('#nameSignup').value;
  const org = document.querySelector('#orgSignup').value;
  const gdpr = document.querySelector('#gdprSignup').checked ? 'Y' : 'N';
  
  if (email && name && gdpr) { 
    await addToMailchimp(email, {'NAME': name, 'gdpr[3549]': gdpr, 'ORG': org});
  }
}

const ModalSignup = () => (
  <Modal modalClass="modal-signup">
    <h3 className="modal-title">Updates</h3>
    <p style={{textAlign:'center'}}>If you want to connect, learn more and be a part of a global movement that fundamentally changes how to achieve inclusion, diversity, gender parity, and equality faster and make it sustainable, all you have to do is sign up here. </p>
    <form className="modal-form">
      <label htmlFor="nameSignup" className="modal-form__label">Name</label><br />
      <input id="nameSignup" type="text" name="name" className="modal-form__input" required /><br />
      <label htmlFor="emailSignup" className="modal-form__label">Email</label><br />
      <input id="emailSignup" type="email" name="email" className="modal-form__input" required /><br />
      <label htmlFor="orgSignup" className="modal-form__label">Organisation</label><br />
      <input id="orgSignup" type="text" name="org" className="modal-form__input" required /><br />
      <label htmlFor="gdprSignup" className="modal-form__label gdpr">Opt in to allow us to send you emails – it’s the only way we can stay in touch:
        <input type="checkbox" id="gdprSignup" name="gdpr[3549]" className="modal-form__checkbox" value="Y" />
        <span className="modal-form__check"></span>
      </label>
      <button className="modal-form__button" onClick={_signup} type="button">Count me in</button>
    </form>
  </Modal>
)

export default ModalSignup
