import React from "react"
import { Link } from "gatsby"
import { showModal } from "./modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLockOpen } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faMediumM, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import CreativeCommonsImg from "../images/ccl.png"

const Footer = () => (
  <>
    <footer className="footer">
      <div className="row-auto">
        <div>
          <h3>Get <br/>in Touch</h3>
          <FontAwesomeIcon icon={faEnvelope} className="icon-heading contact-us" onClick={() => showModal('modal','Contact Us','Send')} />
        </div>
        <div>
          <h3>Follow<br/>Inclusion Nudges</h3>
          <a href="https://medium.com/@InclusionNudges" target="_blank" title="Inclusion Nudges Medium" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMediumM} className="icon-heading" />
          </a>
          <a href="https://twitter.com/inclusionnudges" target="_blank" title="Inclusion Nudges Twitter" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon-heading" />
          </a>
          <a href="https://www.linkedin.com/company/inclusionnudges" target="_blank" title="Inclusion Nudges LinkedIn" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading" />
          </a>
        </div>
        <div>
          <h3>Follow Co-Founder<br/>Lisa Kepinski</h3>
          <a href="https://twitter.com/InclusionInst?lang=en" target="_blank" title="Lisa Kepinski Twitter" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon-heading" />
          </a>
          <a href="https://www.linkedin.com/in/lisakepinski" target="_blank" title="Lisa Kepinski LinkedIn" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading" />
          </a>
          <FontAwesomeIcon icon={faEnvelope} className="icon-heading contact-us" onClick={() => showModal('modal-lisa','Contact Lisa','Send')} />
        </div>
        <div>
          <h3>Follow Co-Founder<br/>Tinna Nielsen</h3>
          <a href="https://twitter.com/tinnacnielsen" target="_blank" title="Tinna Nielsen Twitter" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon-heading" />
          </a>
          <a href="https://www.linkedin.com/in/tinna-c-nielsen-115b3b2/" target="_blank" title="Tinna Nielsen LinkedIn" className="dark" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon-heading" />
          </a>
          <FontAwesomeIcon icon={faEnvelope} className="icon-heading contact-us" onClick={() => showModal('modal-tinna','Contact Tinna','Send')} />
        </div>
      </div>
    </footer>
    <div className="cc-license no-print">
      <div className="cc-license__image">
        <picture>
          <source srcSet={CreativeCommonsImg} />
          <img src={CreativeCommonsImg} alt="Creative Commons License" />
        </picture>
      </div>
      <div className="cc-license__text">
        <p>Creative Commons License. The Inclusion Nudges Initative and Guidebook is licensed under the Creative Commons 4.0 International License. This means you can use the material when you share back and don’t use it for commercial purposes.</p>
      </div>
      <div className="cc-license__policy">
        <Link to="/privacy-policy" className="dark"><FontAwesomeIcon icon={faLockOpen} /> Privacy Policy</Link>
      </div>
    </div>
    <div className="footer-address no-print">
      <h4 className="footer-address__text">Inclusion Nudges is a non-profit organisation registered in Denmark. VAT: 39140071 Fuglesangs Alle 11, 8210 DK-Aarhus</h4>
    </div>
  </>
)

export default Footer
