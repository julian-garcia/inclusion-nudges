import React from "react"
import { showModal } from "../components/modal"

import Hub1Img from "../images/hub1.jpg"
import Hub2Img from "../images/hub2.jpg"
import Hub3Img from "../images/hub3.jpg"
import Hub4Img from "../images/hub4.jpg"

const Hub = () => (
  <>
    <h2 className="page-heading">How we can support you</h2>
    <div className="row-auto centered actions">
      <div className="action-container">
        <div className="accent-3" onClick={() => showModal('modal-connect')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-connect')}>
          <div className="vertical-center">
            <h2>Join our webinars</h2>
            <p><strong>Web sessions to learn<br/> about Inclusion Nudges</strong></p>
            <button onClick={() => showModal('modal-connect')} className="contact-us unstyled-button">Book now</button>
          </div>
        </div>
        <div className="action-image" style={{backgroundImage:'url(' + Hub1Img + ')'}}></div>
      </div>
      <div className="action-container">
        <div className="action-image" style={{backgroundImage:'url(' + Hub2Img + ')'}}></div>
        <div className="accent-2" onClick={() => showModal('modal','Get online coaching','Write us')} role="button" tabIndex={0} onKeyPress={() => showModal('modal','Get online coaching','Write us')}>
          <div className="vertical-center">
            <h2>Get online coaching</h2>
            <p><strong>from the experts<br />Lisa & Tinna</strong></p>
            <button onClick={() => showModal('modal','Get online coaching','Write us')} className="contact-us unstyled-button">Write us</button>
          </div>
        </div>
      </div>
      <div className="action-container">
        <div className="accent-4" onClick={() => showModal('modal-booking')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-booking')}>
          <div className="vertical-center">
            <h2>Book talks & learning</h2> 
            <p><strong>in-person or virtual</strong><br/>&nbsp;</p>
            <button onClick={() => showModal('modal-booking')} className="contact-us unstyled-button">Book now</button>
          </div>
        </div>
        <div className="action-image" style={{backgroundImage:'url(' + Hub3Img + ')'}}></div>
      </div>
      <div className="action-container">
        <div className="action-image" style={{backgroundImage:'url(' + Hub4Img + ')'}}></div>
        <div className="accent-1" onClick={() => showModal('modal','Get design support','Write us')} role="button" tabIndex={0} onKeyPress={() => showModal('modal','Get design support','Write us')}>
          <div className="vertical-center">
            <h2>Get design support</h2>
            <p><strong>by collaborating<br />with Tinna & Lisa</strong></p>
            <button onClick={() => showModal('modal','Get design support','Write us')} className="contact-us unstyled-button">Write us</button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hub
