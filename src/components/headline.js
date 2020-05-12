import React from "react"
import { Link } from "gatsby"
import { showModal } from "../components/modal"

import NudgesImg from "../images/guidebook.png"
import NudgesImgSmall from "../images/guidebook-small.png"
import GuideImg from "../images/quick-guide.png"

const Headline = () => (
  <>
    <h2 className="page-heading">Inclusion Nudges Guidebook</h2>
    <div className="row-left-aside">
      <button onClick={() => showModal('modal-purchase')} className="unstyled-button nudges-image-button">
        <picture style={{textAlign:"center"}}>
          <source media="(min-width: 550px)" srcSet={NudgesImg} />
          <source media="(min-width: 0px)" srcSet={NudgesImgSmall}></source>
            <img src={NudgesImg} alt="Inclusion Nudges" className="nudges-image" />
        </picture>
      </button>
      <div style={{marginTop:'1rem'}}>
        <h2>What</h2>
        <h3 className="headline">Inclusion Nudges are <strong>practical designs</strong> to influence the unconscious mind to automatically be inclusive in daily actions, leadership, and decision-making. Inclusion Nudges are redesign of processes, reframing of perceptions, as well as eye-openers that motivate and engage people in making inclusion the norm everywhere, for everyone.</h3>
        <h3 className="headline">The Inclusion Nudges Guidebook is a collection of <strong>100 how-to examples</strong> designed based on behavioural and social sciences and insights about stuck patterns for inclusion. These are all designed and applied by us and a global community of change makers who share their own proven examples.</h3>
        <h2>How</h2>
        <h3 className="headline">This Inclusion Nudges Guidebook shows <strong>step by step how you can</strong> apply Inclusion Nudges in your organisation, community, and society - basically everywhere. We share with you how you can minimise the impact of cognitive bias in systems, processes, cultures, and behaviours to benefit from the diversity of people, and stay agile and innovative, perform better and create a more sustainable future for us all. <br/><strong>You make it happen!</strong></h3>
      </div>
    </div>
    <div className="row-auto indented-row guide-book-links">
      <button onClick={() => showModal('modal-purchase')} className="dark modal-form__button guidebook-link">Purchase your<br/> Guidebook&nbsp;now</button>
      <button onClick={() => showModal('modal-signup')} className="modal-form__button guidebook-link">Join to<br/> stay&nbsp;updated</button>
      <Link to="/why-what-how" className="modal-form__button guidebook-link">Read free<br/> Quick&nbsp;Guide</Link>
      <Link to="/why-what-how" className="guidebook-link">
        <img src={GuideImg} alt="Inclusion Nudges Free Guide" />
      </Link>
      <Link to="/articles-podcasts-videos" className="modal-form__button guidebook-link">Get more<br/> resources</Link>
    </div>
  </>
)

export default Headline
