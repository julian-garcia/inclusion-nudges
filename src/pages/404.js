import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="accent-2">
      <h2 className="text">Page Not Found</h2>
      <h3 className="text">We couldn't find that page. Please get in touch if you have any questions.</h3>
    </div>
  </Layout>
)

export default NotFoundPage
