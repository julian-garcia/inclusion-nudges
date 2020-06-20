import React from "react"
import { Link } from "gatsby"
import { showModal } from "../components/modal"

import WhyImg from "../images/why.png"
import WhatImg from "../images/what.png"
import HowImg from "../images/how.png"

const Headline = () => (
  <>
    <h2 className="page-heading">Inclusion Nudges change approach and global initiative </h2>
    <div className="row-auto approach">
      <div className="grid-item-image" style={{backgroundImage:`url(${WhyImg})`}}>
        <Link to="/why-what-how" className="unstyled-button"></Link>
        <div>
          <h2>Why</h2>
          <h3 className="headline">There is a need to leverage the diverse human potential of everyone to co-create inclusive organisations, communities, and society</h3>
          <h3 className="apply-link-style">Learn more...</h3>
        </div>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${WhatImg})`}}>
        <Link to="/why-what-how" className="unstyled-button"></Link>
        <div>
          <h2>What</h2>
          <h3 className="headline">Inclusion Nudges are behavioural designs to debias and enhance inclusive collaboration, leadership, development, and decisions</h3>
          <h3 className="apply-link-style">Learn more...</h3>
        </div>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${HowImg})`}}>
        <Link to="/why-what-how" className="unstyled-button"></Link>
        <div>
          <h2>How</h2>
          <h3 className="headline">Empowering you to apply Inclusion Nudges to engage all people in making systems, cultures, and behaviours inclusive as the norm</h3>
          <h3 className="apply-link-style">Learn more...</h3>
        </div>
      </div>
      <div className="accent-3" onClick={() => showModal('modal-signup')} role="button" tabIndex={0} onKeyPress={() => showModal('modal-signup')} style={{cursor:'pointer', height:'100%'}}>
        <div className="vertical-center" style={{textAlign:'center'}}>
          <h2>Join & Stay Updated</h2>
        </div>
      </div>
    </div>
  </>
)

export default Headline
