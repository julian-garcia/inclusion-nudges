import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <div className="accent-2">
      <h2 className="text">Page Not Found</h2>
      <h3 className="text">We couldn't find that page. Please <button className="contact-us" onClick={showModal}>get in touch</button> if you have any questions.</h3>
    </div>
  </Layout>
)

export default NotFoundPage
