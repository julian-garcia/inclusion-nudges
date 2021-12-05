import { Link } from "gatsby"
import React from "react"
import { showModal } from "../components/modal"

import Hub1Img from "../images/hub1.jpg"
import Hub2Img from "../images/hub2.jpg"
import Hub3Img from "../images/hub3.jpg"
import Hub4Img from "../images/hub4.jpg"
import NudgingImg from "../images/nudging.png"

const Hub = () => (
  <>
    <h2 className="page-heading see-who">
      How we can support you <Link to="/organisations" className="organisations__link"><img src={NudgingImg} alt="" style={{width:'50px', margin:'0rem 0 -1rem 1rem'}} /> See who</Link> 
    </h2>
    <div className="row-auto centered actions">
      <div className="action-container">
        <div className="accent-3" onClick={() => showModal('modal','Write us about your strategic advisory needs','Send')} role="button" tabIndex={0} onKeyPress={() => showModal('modal','Write us about your strategic advisory needs','Send')}>
          <div className="vertical-center">
            <h2>Get strategic advice for your  Board & Leadership Teams </h2>
            <p>Internal & external development focused on diversity, sustainability, social impact, & inclusive growth</p>            
            <button onClick={() => showModal('modal','Write us about your strategic advisory needs','Send')} className="contact-us unstyled-button">Contact us</button>
          </div>
        </div>
        <div className="action-image" style={{backgroundImage:'url(' + Hub1Img + ')', backgroundPosition:'center left'}}></div>
      </div>
      <div className="action-container">
        <div className="action-image" style={{backgroundImage:'url(' + Hub2Img + ')'}}></div>
        <div className="accent-2" onClick={() => showModal('modal','Write us about your change coaching needs','Write us')} role="button" tabIndex={0} onKeyPress={() => showModal('modal','Write us about your change coaching needs','Write us')}>
          <div className="vertical-center">
            <h2>Get change coaching</h2>
            <p><strong>from the experts<br />Lisa & Tinna</strong></p>
            <button onClick={() => showModal('modal','Write us about your change coaching needs','Write us')} className="contact-us unstyled-button">Write us</button>
          </div>
        </div>
      </div>
      <div className="action-container">
        <div className="accent-4" onClick={() => showModal('modal-booking')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-booking')}>
          <div className="vertical-center">
            <h2>Book talks & learning</h2> 
            <p><strong>Online or in-person</strong><br/>&nbsp;</p>
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
