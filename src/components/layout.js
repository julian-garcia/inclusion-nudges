import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import ModalContact from "./modal-contact"
import "../style/main.scss"

const Layout = ({ children, siteTitle, alignment, footer }) => {
  return (
    <>
      <Header siteTitle={siteTitle} alignment={alignment} />
      <main className="container">
        {children}
      </main>
      {footer && <Footer />}
      <ModalContact />
    </>
  )
}

Layout.defaultProps = {
  footer: true
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
  alignment: PropTypes.string,
  footer: PropTypes.bool
}

export default Layout
