import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NudgesImg from "../images/nudges.png"
import IconHandsImg from "../images/icon-hands.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text"><strong>Inclusion Nudges is a change methodology</strong> developed by Lisa Kepinski and Tinna C. Nielsen based on extensive experience as global change makers combined with their background in behavioural sciences</h3>
    </div>
    <h2 className="page-heading">Inclusion Nudges Guidebook</h2>
    <div class="row-left-aside">
      <picture style={{textAlign:"center"}}>
        <source srcSet={NudgesImg} />
        <img src={NudgesImg} alt="Inclusion Nudges" className="nudges-image" />
      </picture>
      <div>
        <h3>WHAT</h3>
        <p>101 examples of Inclusion Nudges.<br />Inclusion Nudges are designed interventions based on insights from behavioural and social sciences & stuck patterns for inclusion.</p>
        <h3>HOW</h3>
        <p>We share with you HOW you can apply and design Inclusion Nudges to minimise the impact of unconscious bias in systems, processes, cultures, and behaviours.</p>
        <p>Each example <strong>EMPOWERS you</strong> <br />to change your organisation, community, and society <br />to be inclusive by default and norm</p>
        <h3 style={{marginBottom:`1rem`}}><Link to='/'>Purchase your guide book</Link></h3>
        <h3><Link to='/'>Download a free taster</Link></h3>
      </div>
    </div>
    <h2 className="page-heading">What people say about Inclusion Nudges</h2>
    <div className="accent-3" style={{textAlign:"center", position:"relative"}}>
      <picture>
        <source srcSet={IconHandsImg} />
        <img src={IconHandsImg} alt="Inclusion Nudges" className="icon" style={{marginLeft:"0"}} />
      </picture>
      <h2 className="text" style={{display:"inline-block", paddingLeft:"3rem"}}>Share your testimonial <Link to='/' className="dark">HERE</Link> – How has Inclusion Nudges worked for you?</h2>
    </div>
    <h2 className="page-heading">Actions you can take & assistance you can get</h2>
    <div class="row-auto centered">
      <div className="accent-3">
        <h2>Read</h2> 
        <p><strong>Inclusion Nudges Guidebook<br />to do it yourself</strong></p>
        <h3><Link to='/' className="colour-white">Order it</Link></h3>
      </div>
      <div className="accent-2">
        <h2>Get online coaching</h2>
        <p><strong>from the experts<br />Lisa & Tinna</strong></p>
        <h3><Link to='/' className="colour-white">Write us</Link></h3>
      </div>
      <div className="accent-4">
        <h2>Share your Inclusion Nudge</h2> 
        <p><strong>examples<br />to inspire others</strong></p>
        <h3><a href="mailto:contact@inclusion-nudges.org" class="colour-white">Write us</a></h3>
      </div>
      <div className="accent-1">
        <h2>Get bespoke design support</h2>
        <p><strong>by collaborating<br />with Tinna & Lisa</strong></p>
        <h3><a href="mailto:contact@inclusion-nudges.org" class="colour-white">Write us</a></h3>
      </div>
    </div>
    <div style={{textAlign:"center", position:"relative", padding:"3rem 1rem"}}>
      <h2 className="text" style={{display:"inline-block", paddingRight:"3rem"}}>Join this global movement for inclusiveness – Sign up <Link to='/'>HERE</Link> to stay updated</h2>
      <picture>
        <source srcSet={IconHandsImg} />
        <img src={IconHandsImg} alt="Inclusion Nudges" className="icon" style={{marginLeft:"-2rem"}} />
      </picture>
    </div>
  </Layout>
)

export default IndexPage
