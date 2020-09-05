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
    <h2 className="page-heading" style={{padding:'1rem 0 1rem'}}>How you make it happen now</h2>
    <div className="row-auto centered footer-bg desktop-m-up" style={{padding:'0 3rem'}}>
      <h2 className="page-heading" style={{gridColumn:'1 / span 2', marginBottom:'0'}}>THE INCLUSION NUDGES GUIDEBOOK</h2>
      <h2 className="page-heading" style={{gridColumn:'3 / span 3', marginBottom:'0'}}>ACTION GUIDE SERIES</h2>
    </div>
    <div className="row-auto centered footer-bg desktop-m-up">
      <Link to="quick-guide" style={{margin:'1rem 0'}}>
        <h2 className="colour-accent-2" style={{fontWeight:'normal'}}>Quick introduction<br/><span className="colour-black">FOR ALL PEOPLE</span></h2>
        <img src={QuickGuideImg} alt="" style={{height:'350px', padding:'40px 0'}} />
        <h3 className="colour-accent-2">Read free<br/>Quick Guide</h3>
      </Link>
      <div onClick={() => showModal('modal-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-1" style={{fontWeight:'normal'}}>100 Inclusion Nudges<br/><span className="colour-black">FOR CHANGE MAKERS</span></h2>
        <img src={GuideFrontImg} alt="" style={{height:'350px', paddingRight:'60px'}} />
        <h3 className="colour-accent-1">Order your<br/>Guidebook now</h3>
      </div>
      <div onClick={() => showModal('ag-leaders-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0 1rem 4rem'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black">FOR LEADERS</span></h2>
        <img src={LeaderImg} alt="" style={{height:'350px', paddingRight:'30px'}} />
        <h3 className="colour-accent-4">Order now<br/><span style={{fontWeight:'normal', fontSize:'1rem'}}>Available as eBook soon</span></h3>
      </div>
      <div onClick={() => showModal('ag-allies-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 2rem 1rem 2rem'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black">FOR MOTIVATING ALLIES</span></h2>
        <img src={AlliesImg} alt="" style={{height:'350px', paddingRight:'30px'}} />
        <h3 className="colour-accent-4">Order now<br/><span style={{fontWeight:'normal', fontSize:'1rem'}}>Available as eBook soon</span></h3>
      </div>
      <div onClick={() => showModal('ag-talent-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 4rem 1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black">FOR TALENT SELECTION</span></h2>
        <img src={TalentImg} alt="" style={{height:'350px', paddingRight:'30px'}} />
        <h3 className="colour-accent-4">Order now<br/><span style={{fontWeight:'normal', fontSize:'1rem'}}>Available as eBook soon</span></h3>
      </div>
    </div>

    <h2 className="page-heading centered footer-bg desktop-down" style={{padding:'2rem 0 0', margin:'0'}}>THE INCLUSION NUDGES GUIDEBOOK</h2>
    <div className="row-auto centered footer-bg desktop-down">
      <Link to="quick-guide" style={{margin:'1rem 0'}}>
        <h2 className="colour-accent-2" style={{fontWeight:'normal'}}>Quick introduction<br/><span className="colour-black" >FOR ALL PEOPLE</span></h2>
        <img src={QuickGuideImg} alt="" style={{height:'350px', padding:'20px 0'}} />
        <h3 className="colour-accent-2">Read free<br/>Quick Guide</h3>
      </Link>      
      <div onClick={() => showModal('modal-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-1" style={{fontWeight:'normal'}}>100 Inclusion Nudges<br/><span className="colour-black">FOR CHANGE MAKERS</span></h2>
        <img src={GuideFrontImg} alt="" style={{height:'350px', paddingRight:'60px'}} />
        <h3 className="colour-accent-1">Order your<br/>Guidebook now</h3>
      </div>
    </div>
    <h2 className="page-heading centered footer-bg desktop-down" style={{padding:'0', margin:'0'}}>ACTION GUIDE SERIES</h2>
    <div className="row-auto centered footer-bg desktop-down">
      <div onClick={() => showModal('ag-leaders-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black">FOR LEADERS</span></h2>
        <img src={LeaderImg} alt="" style={{height:'350px', paddingRight:'30px'}} />
        <h3 className="colour-accent-4">Order now<br/><span style={{fontWeight:'normal', fontSize:'1rem'}}>Available as eBook soon</span></h3>
      </div>
      <div onClick={() => showModal('ag-allies-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black" >FOR MOTIVATING ALLIES</span></h2>
        <img src={AlliesImg} alt="" style={{height:'350px', paddingRight:'30px'}} />
        <h3 className="colour-accent-4">Order now<br/><span style={{fontWeight:'normal', fontSize:'1rem'}}>Available as eBook soon</span></h3>
      </div>
      <div onClick={() => showModal('ag-talent-purchase')} role="button" style={{cursor:'pointer',margin:'1rem 0'}} onKeyPress={() => {}} tabIndex="0">
        <h2 className="colour-accent-4" style={{fontWeight:'normal'}}>30 Actions<br/><span className="colour-black">FOR TALENT SELECTION</span></h2>
        <img src={TalentImg} alt="" style={{height:'350px', paddingRight:'30px'}} />
        <h3 className="colour-accent-4">Order now<br/><span style={{fontWeight:'normal', fontSize:'1rem'}}>Available as eBook soon</span></h3>
      </div>
    </div>
  </>
)

export default Books
