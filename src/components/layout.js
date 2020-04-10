import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import ModalContact from "./modal-contact"
import "../style/main.scss"

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container">
        {children}
      </main>
      <Footer />
      <ModalContact />
      <ModalContact modalClass='modal-lisa' signature='lisa' />
      <ModalContact modalClass='modal-tinna' signature='tinna' />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
