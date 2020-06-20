import React from "react"
import { Link } from "gatsby"
import { showModal } from "../components/modal"

import QuickGuideImg from "../images/quick-guide-flat.jpg"
import GuideFrontImg from "../images/guidebook-front.png"
import LeaderImg from "../images/ag-leaders.png"
import TalentImg from "../images/ag-talent-selection.png"
import AlliesImg from "../images/ag-motivating-allies.png"

const Books = () => (
  <>
    <div className="row-auto centered footer-bg desktop-m-up" style={{padding:'2rem 3rem 0'}}>
      <h2 className="page-heading" style={{gridColumn:'1 / span 2'}}>The Inclusion Nudges Guidebook</h2>
      <h2 className="page-heading" style={{gridColumn:'3 / span 3'}}>Action Guide Series</h2>
    </div>
    <div className="row-auto centered footer-bg desktop-m-up">
      <Link to="quick-guide" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">Quick introduction<br/>FOR ALL PEOPLE</h2>
        <img src={QuickGuideImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-2">Read free<br/>Quick Guide</h3>
      </Link>      
      <div onClick={() => showModal('modal-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-black">100 Inclusion Nudges<br/>FOR CHANGE MAKERS</h2>
        <img src={GuideFrontImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-1">Order your<br/>Guidebook now</h3>
      </div>
      <Link to="#" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">30 Actions<br/>FOR LEADERS</h2>
        <img src={LeaderImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-4">Order now</h3>
      </Link>
      <Link to="#" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">30 Actions<br/>FOR TALENT SELECTION</h2>
        <img src={TalentImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-4">Pre-order now</h3>
      </Link>
      <Link to="#" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">30 Actions<br/>FOR MOTIVATING ALLIES</h2>
        <img src={AlliesImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-4">Pre-order now</h3>
      </Link>
    </div>

    <h2 className="page-heading centered footer-bg desktop-down" style={{padding:'2rem 0 1rem', margin:'0'}}>The Inclusion Nudges Guidebook</h2>
    <div className="row-auto centered footer-bg desktop-down">
      <Link to="quick-guide" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">Quick introduction<br/>FOR ALL PEOPLE</h2>
        <img src={QuickGuideImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-2">Read free<br/>Quick Guide</h3>
      </Link>      
      <div onClick={() => showModal('modal-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-black">100 Inclusion Nudges<br/>FOR CHANGE MAKERS</h2>
        <img src={GuideFrontImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-1">Order your<br/>Guidebook now</h3>
      </div>
    </div>
    <h2 className="page-heading centered footer-bg desktop-down" style={{padding:'2rem 0 1rem', margin:'0'}}>Action Guide Series</h2>
    <div className="row-auto centered footer-bg desktop-down">
      <Link to="#" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">30 Actions<br/>FOR LEADERS</h2>
        <img src={LeaderImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-4">Order now</h3>
      </Link>
      <Link to="#" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">30 Actions<br/>FOR TALENT SELECTION</h2>
        <img src={TalentImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-4">Pre-order now</h3>
      </Link>
      <Link to="#" style={{margin:'1rem 0'}}>
        <h2 className="colour-black">30 Actions<br/>FOR MOTIVATING ALLIES</h2>
        <img src={AlliesImg} alt="" style={{height:'350px'}} />
        <h3 className="colour-accent-4">Pre-order now</h3>
      </Link>
    </div>
  </>
)

export default Books
