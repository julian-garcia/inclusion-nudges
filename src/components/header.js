import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImg from "../images/logo.jpg"
import LogoImgSmall from "../images/logo-small.jpg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-title-container">
      <h1 className="site-title">Let’s make inclusion the norm<br/>- everywhere, for everyone</h1>
    </div>
    <Link to="/" className="header-logo-container">
      <picture>
        <source media="(min-width: 400px)" srcSet={LogoImg} />
        <source media="(min-width: 0px)" srcSet={LogoImgSmall} />
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
