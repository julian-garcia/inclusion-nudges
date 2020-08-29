import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import ModalContact from "./modal-contact"
import "../style/main.scss"

function eventListeners() {
  if (typeof document !== `undefined`) {
    document.addEventListener('click', (event) => {
      if (event.target.nodeName === 'A' && event.target.hasAttribute('href')) {
        typeof window !== "undefined" && window.gtag &&
        window.gtag("event", "link", 
                    {'event_category':'Page link',
                    'event_label':'Link pressed: ' + event.target.textContent});
      }
    });
  }
}

const Layout = ({ children, siteTitle, alignment }) => {
  eventListeners();
  return (
    <>
      <Header siteTitle={siteTitle} alignment={alignment} />
      <main className="container">
        {children}
      </main>
      <Footer />
      <ModalContact />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
  alignment: PropTypes.string
}

export default Layout
