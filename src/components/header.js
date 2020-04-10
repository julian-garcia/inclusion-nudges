import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImg from "../images/logo.jpg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-title-container">
      <h1 className="site-title site-title--bottom">Let's make inclusion the new normal<br/>- everywhere, for everyone</h1>
    </div>
    <Link to="/" className="header-logo-container">
      <picture>
        <source srcSet={LogoImg} />
        <img src={LogoImg} alt="Inclusion Nudges" className="header-logo" />
      </picture>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
