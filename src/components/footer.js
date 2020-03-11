import React from "react"
import { Link } from "gatsby"
import { showModal } from "./modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"
import CreativeCommonsImg from "../images/ccl.png"

const Footer = () => (
  <footer className="footer row-auto">
    <div>
      <h3>Get in Touch</h3>
      <FontAwesomeIcon icon={faEnvelope} className="icon-heading contact-us" onClick={() => showModal('modal')} />
    </div>
    <div>
      <h3>Follow Inclusion Nudges</h3>
      <a href="https://medium.com/@InclusionNudges" target="_blank" title="Inclusion Nudges Medium" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} className="icon-heading" />
      </a>
      <a href="https://twitter.com/inclusionnudges" target="_blank" title="Inclusion Nudges Twitter" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="icon-heading" />
      </a>
      <a href="https://www.linkedin.com/company/inclusionnudges" target="_blank" title="Inclusion Nudges LinkedIn" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon-heading" />
      </a>
    </div>
    <div>
      <h3>Follow Co-Founder Lisa Kepinski</h3>
      <a href="https://twitter.com/InclusionInst?lang=en" target="_blank" title="Lisa Kepinski Twitter" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="icon-heading" />
      </a>
      <a href="https://www.linkedin.com/in/lisakepinski" target="_blank" title="Lisa Kepinski LinkedIn" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon-heading" />
      </a>
      <FontAwesomeIcon icon={faEnvelope} className="icon-heading contact-us" onClick={() => showModal('modal','Lisa')} />
    </div>
    <div>
      <h3>Follow Co-Founder Tinna Nielsen</h3>
      <a href="https://medium.com/@tinnaCnielsen" target="_blank" title="Tinna Nielsen Medium" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} className="icon-heading" />
      </a>
      <a href="https://twitter.com/tinnacnielsen" target="_blank" title="Tinna Nielsen Twitter" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="icon-heading" />
      </a>
      <a href="https://www.linkedin.com/in/tinna-c-nielsen-115b3b2/" target="_blank" title="Tinna Nielsen LinkedIn" className="dark" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon-heading" />
      </a>
      <FontAwesomeIcon icon={faEnvelope} className="icon-heading contact-us" onClick={() => showModal('modal','Tinna')} />
    </div>
    <div>
      <picture style={{textAlign:"center"}}>
        <source srcSet={CreativeCommonsImg} />
        <img src={CreativeCommonsImg} alt="Creative Commons License" />
      </picture>
      <p style={{fontSize: '14px'}}>Creative Commons License<br />The Inclusion Nudges Initative and Guidebook is licensed under the Creative Commons 4.0 International License. This means you can use the material when you share back and don’t use it for commercial purposes.</p>
      <Link to="/privacy-policy" className="dark">Privacy Policy</Link>
    </div>
  </footer>
)

export default Footer
