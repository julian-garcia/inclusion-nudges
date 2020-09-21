import React from "react"
import PropTypes from "prop-types"
import Modal from "../components/modal"
import { showModal } from "./modal"
import addToMailchimp from "gatsby-plugin-mailchimp"
import SignatureImg from "../images/signature.png"
import FoundersImg from "../images/newsletter/lisa-tinna.jpg"

const _signup = async (endpoint, signupType) => {
  const email = document.querySelector(`#emailSignup${signupType}`).value;
  const name = document.querySelector(`#nameSignup${signupType}`).value;
  const gdpr = document.querySelector(`#gdprSignup${signupType}`).checked ? 'Y' : 'N';

  if (email && name && gdpr) { 
    await addToMailchimp(email, {'NAME': name, 'gdpr[44665]': gdpr}, endpoint);
    showModal('signup-confirmation');
    typeof window !== "undefined" && window.gtag &&
    window.gtag("event", "click", 
                {'event_category':'Button Click',
                'event_label':'Subscribe to blog'});
  }
}

const ModalSignup = ({signupType}) => (
  <>
  <Modal modalClass={`modal-signup modal-signup-${signupType}`} signature='none'>
    {signupType === 'community' &&
    <>
      <h3 className="modal-title">Join the Inclusion Nudges <br/>global initiative and community. <br/>It’s free to join – we are in it for the impact.</h3>
      <p style={{textAlign:'center'}}>If you want to connect, learn more and be a part of a global movement that fundamentally changes how to achieve inclusion, diversity, gender parity, and equality faster and make it sustainable, all you have to do is sign up here.</p>
    </>}
    {signupType === 'blog' &&
    <>
      <h2 className="modal-title" style={{margin:'auto'}}>Inclusion&nbsp;Nudges News&nbsp;&&nbsp;Blog</h2>
      <h3 className="modal-title" style={{margin:'auto'}}>Sign up for monthly inspiration</h3>
      <h4 style={{textAlign:'center'}}>We send you practical examples how to apply behavioural insights and Inclusion Nudges</h4>
      <img src={FoundersImg} className="modal-blog-founders" alt="" />
      <img src={SignatureImg} className="modal-blog-signature" alt="" style={{maxWidth:'150px'}} />
      <h4 style={{textAlign:'center'}}>Lisa Kepinski & Tinna C. Nielsen</h4>
    </>}
    <form className="modal-form">
      <label htmlFor={`nameSignup${signupType}`} className="modal-form__label">Name</label><br />
      <input id={`nameSignup${signupType}`} type="text" name="name" className="modal-form__input" required /><br />
      <label htmlFor={`emailSignup${signupType}`} className="modal-form__label">Email</label><br />
      <input id={`emailSignup${signupType}`} type="email" name="email" className="modal-form__input" required /><br />
      {signupType === 'community' &&
      <>
      <label htmlFor="orgSignup" className="modal-form__label">Organisation</label><br />
      <input id="orgSignup" type="text" name="org" className="modal-form__input" required /><br />
      <label htmlFor={`gdprSignup${signupType}`} className="modal-form__label gdpr">Opt in to allow us to send you emails – it’s the only way we can stay in touch:
        <input type="checkbox" id={`gdprSignup${signupType}`} name="gdpr[3549]" className="modal-form__checkbox" value="Y" />
        <span className="modal-form__check"></span>
      </label>
      </>}
      {signupType === 'blog' &&
      <>
      <label htmlFor={`gdprSignup${signupType}`} className="modal-form__label gdpr">
        <input type="checkbox" id={`gdprSignup${signupType}`} name="gdpr[44665]" className="modal-form__checkbox" value="Y" />
        <span className="modal-form__check"></span>
      </label>
      <h4 className="modal-form__privacy" style={{margin:'-1rem 0 0 3rem'}}>I have read this site's <a href="/privacy-policy">privacy policy</a> and give my consent to be subscribed.</h4>
      </>}
      {signupType === 'community' &&
      <button className="modal-form__button" onClick={() => _signup(`${process.env.GATSBY_MAILCHIMP_ENDPOINT}`,`${signupType}`)} type="button">Count me in</button>}
      {signupType === 'blog' &&
      <button className="modal-form__button" onClick={() => _signup(`${process.env.GATSBY_MAILCHIMP_BLOG}`,`${signupType}`)} type="button">Subscribe</button>}
    </form>
  </Modal>
  {signupType === 'blog' &&
  <Modal modalClass='modal-signup signup-confirmation' signature='none'>
    <h3 className="modal-title">Thank you</h3>
    <h4 style={{textAlign:'center'}}>Your subscription to the Inclusion Nudges News & Blog is confirmed.</h4>
    <h4 style={{textAlign:'center'}}>We also invite you to follow the Inclusion Nudges global Initiative on <a href="https://www.linkedin.com/company/inclusionnudges" target="_blank" rel="noopener noreferrer">LinkedIn</a> and connect with the Founders & Authors <a href="https://www.linkedin.com/in/lisakepinski" target="_blank" rel="noopener noreferrer">Lisa Kepinski</a> & <a href="https://www.linkedin.com/in/tinna-c-nielsen-115b3b2/" target="_blank" rel="noopener noreferrer">Tinna C. Nielsen on LinkedIn</a></h4>
  </Modal>}
  </>
)

ModalSignup.propTypes = {
  signupType: PropTypes.string
}

ModalSignup.defaultProps = {
  signupType: 'community'
}

export default ModalSignup
