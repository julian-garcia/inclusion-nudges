import React from "react"
import { Link } from "gatsby"

import WhyImg from "../images/why.png"
import WhatImg from "../images/what.png"
import HowImg from "../images/how.png"

const Headline = () => (
  <>
    <h2 className="page-heading">Inclusion Nudges change approach and global initiative </h2>
    <div className="row-auto approach">
      <div className="grid-item-image" style={{backgroundImage:`url(${WhyImg})`}}>
        <Link to="/blog/about-inclusion-nudges/power-of-inclusion-nudges" className="unstyled-button"></Link>
        <div>
          <h2>Why</h2>
          <h3 className="headline">There is a need to leverage the diverse human potential of everyone to co-create inclusive organisations and communities</h3>
          <h3 className="apply-link-style approach-learn-more">Learn more...</h3>
        </div>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${WhatImg})`}}>
        <Link to="/blog/about-inclusion-nudges/power-of-inclusion-nudges" className="unstyled-button"></Link>
        <div>
          <h2>What</h2>
          <h3 className="headline">Inclusion Nudges are behavioural designs to debias and enhance inclusive collaboration, leadership, development, and decisions</h3>
          <h3 className="apply-link-style approach-learn-more">Learn more...</h3>
        </div>
      </div>
      <div className="grid-item-image" style={{backgroundImage:`url(${HowImg})`}}>
        <Link to="/blog/about-inclusion-nudges/power-of-inclusion-nudges" className="unstyled-button"></Link>
        <div>
          <h2>How</h2>
          <h3 className="headline">Empowering you to apply Inclusion Nudges to engage all people in making systems, cultures, and behaviours inclusive as the norm</h3>
          <h3 className="apply-link-style approach-learn-more">Learn more...</h3>
        </div>
      </div>
      <Link to="/blog" className="accent-3" style={{height:'100%', minHeight:'200px'}}>
        <div className="vertical-center" style={{textAlign:'center'}}>
          <h3>Read | Listen | Watch</h3>
          <h2><span style={{fontWeight:'normal'}}>The<br/>Inclusion&nbsp;Nudges</span><br/>BLOG</h2>
        </div>
      </Link>
      <Link to="/blog/about-inclusion-nudges/power-of-inclusion-nudges" className="approach-link">Learn more ABOUT Inclusion&nbsp;Nudges HERE</Link>
    </div>
  </>
)

export default Headline
