import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import addToMailchimp from "gatsby-plugin-mailchimp"

const _signup = async (endpoint) => {
  const email = document.querySelector('#emailSignup').value;
  const name = document.querySelector('#nameSignup').value;
  const gdpr = document.querySelector('#gdprSignup').checked ? 'Y' : 'N';
  const orgElement = document.querySelector('#orgSignup');
  let org;
  if (orgElement) { org = orgElement.value; }

  if (email && name && gdpr) { 
    if (endpoint === `${process.env.GATSBY_MAILCHIMP_ENDPOINT}`) {
      await addToMailchimp(email, {'NAME': name, 'gdpr[3549]': gdpr, 'ORG': org}, endpoint);
      typeof window !== "undefined" && window.gtag &&
      window.gtag("event", "click", 
                  {'event_category':'Button Click',
                   'event_label':'Join the Inclusion Nudges Community'});
    } else {
      await addToMailchimp(email, {'NAME': name, 'gdpr[44665]': gdpr}, endpoint);
      typeof window !== "undefined" && window.gtag &&
      window.gtag("event", "click", 
                  {'event_category':'Button Click',
                   'event_label':'Subscribe to blog'});
    }
  }
}

const ModalSignup = ({signupType}) => (
  <Modal modalClass="modal-signup">
    {signupType === 'community' &&
    <>
      <h3 className="modal-title">Join the Inclusion Nudges <br/>global initiative and community. <br/>It’s free to join – we are in it for the impact.</h3>
      <p style={{textAlign:'center'}}>If you want to connect, learn more and be a part of a global movement that fundamentally changes how to achieve inclusion, diversity, gender parity, and equality faster and make it sustainable, all you have to do is sign up here.</p>
    </>}
    {signupType === 'blog' &&
    <h3 className="modal-title" style={{maxWidth:'300px', margin:'auto'}}>Subscribe here so you can know about new blog posts from us</h3>}
    <form className="modal-form">
      <label htmlFor="nameSignup" className="modal-form__label">Name</label><br />
      <input id="nameSignup" type="text" name="name" className="modal-form__input" required /><br />
      <label htmlFor="emailSignup" className="modal-form__label">Email</label><br />
      <input id="emailSignup" type="email" name="email" className="modal-form__input" required /><br />
      {signupType === 'community' &&
      <>
      <label htmlFor="orgSignup" className="modal-form__label">Organisation</label><br />
      <input id="orgSignup" type="text" name="org" className="modal-form__input" required /><br />
      <label htmlFor="gdprSignup" className="modal-form__label gdpr">Opt in to allow us to send you emails – it’s the only way we can stay in touch:
        <input type="checkbox" id="gdprSignup" name="gdpr[3549]" className="modal-form__checkbox" value="Y" />
        <span className="modal-form__check"></span>
      </label>
      </>}
      {signupType === 'blog' &&
      <>
      <label htmlFor="gdprSignup" className="modal-form__label gdpr">Opt in to allow us<br/> to send you blog updates 
        <input type="checkbox" id="gdprSignup" name="gdpr[44665]" className="modal-form__checkbox" value="Y" />
        <span className="modal-form__check"></span>
      </label>
      </>}
      {signupType === 'community' &&
      <button className="modal-form__button" onClick={() => _signup(`${process.env.GATSBY_MAILCHIMP_ENDPOINT}`)} type="button">Count me in</button>}
      {signupType === 'blog' &&
      <button className="modal-form__button" onClick={() => _signup(`${process.env.GATSBY_MAILCHIMP_BLOG}`)} type="button">Subscribe</button>}
    </form>
  </Modal>
)

ModalSignup.propTypes = {
  signupType: PropTypes.string
}

ModalSignup.defaultProps = {
  signupType: 'community'
}

export default ModalSignup
