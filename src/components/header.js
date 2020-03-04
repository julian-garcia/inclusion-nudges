import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NudgesImg from "../images/nudges.png"
import LogoImg from "../images/logo.jpg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-title-container">
      <h1 className="site-title site-title--top">A global movement </h1>
      <h1 className="site-title site-title--bottom">We are people worldwide<br />making inclusion the default and norm </h1>
    </div>
    <Link to="/" className="header-logo-container">
      <picture>
        <source srcSet={LogoImg} />
        <img src={LogoImg} alt="Inclusion Nudges" className="header-logo" />
      </picture>
    </Link>
    <picture className="header-nudges-container">
      <source srcSet={NudgesImg} />
      <img src={NudgesImg} alt="Inclusion Nudges" className="header-nudges" />
    </picture>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
