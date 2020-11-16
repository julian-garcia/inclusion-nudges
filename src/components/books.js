import React from "react"
import { Link } from "gatsby"
import { showModal } from "../components/modal"

import QuickGuideImg from "../images/quick-guide.png"
import GuideFrontImg from "../images/guidebook-front.png"
import LeaderImg from "../images/ag-leaders.png"
import TalentImg from "../images/ag-talent-selection.png"
import AlliesImg from "../images/ag-motivating-allies.png"

const Books = () => (
  <>
    <h2 className="page-heading" style={{padding:'1rem 0'}}>How you make it happen now</h2>
    <div className="centered footer-bg books">
      <h2 className="page-heading books__title" style={{gridColumn:'1 / span 2', marginBottom:'0'}}>THE INCLUSION NUDGES GUIDEBOOK</h2>
      <Link to="/blog/about-inclusion-nudges/power-of-inclusion-nudges" className="book">
        <h2 className="colour-accent-2 book__title" style={{fontWeight:'normal'}}>Quick introduction<br/><span className="colour-black book__subtitle">FOR ALL PEOPLE</span></h2>
        <img src={QuickGuideImg} className="book__image quick" alt="" />
        <h3 className="colour-accent-2">Read free<br/>Quick Guide</h3>
      </Link>
      <div onClick={() => showModal('modal-purchase')} role="button" className="book" onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-1 book__title" style={{fontWeight:'normal'}}>100 Inclusion Nudges<br/><span className="colour-black book__subtitle">FOR CHANGE MAKERS</span></h2>
        <img src={GuideFrontImg} className="book__image" alt="" style={{marginLeft:'-60px'}} />
        <h3 className="colour-accent-1">Order your<br/>Guidebook now</h3>
      </div>
      <h2 className="page-heading books__title" style={{gridColumn:'3 / span 3', marginBottom:'0'}}>ACTION GUIDE SERIES</h2>
      <div onClick={() => showModal('ag-leaders-purchase')} role="button" className="book" onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4 book__title" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black book__subtitle">FOR LEADERS</span></h2>
        <img src={LeaderImg} className="book__image" alt="" />
        <h3 className="colour-accent-4">Order now</h3>
      </div>
      <div onClick={() => showModal('ag-allies-purchase')} role="button" className="book" onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4 book__title" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black book__subtitle">FOR MOTIVATING ALLIES</span></h2>
        <img src={AlliesImg} className="book__image" alt="" />
        <h3 className="colour-accent-4">Order now</h3>
      </div>
      <div onClick={() => showModal('ag-talent-purchase')} role="button" className="book" onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4 book__title" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black book__subtitle">FOR TALENT SELECTION</span></h2>
        <img src={TalentImg} className="book__image" alt="" />
        <h3 className="colour-accent-4">Order now</h3>
      </div>
      <h3 className="page-heading ebook colour-accent-4 book__title">Available as eBook & Paperback</h3>
    </div>
  </>
)

export default Books
