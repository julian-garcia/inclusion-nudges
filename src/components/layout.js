import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  eventListeners();
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container">
        {children}
      </main>
      <Footer />
      <ModalContact />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
