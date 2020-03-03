import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageTitle="Hi">
    <SEO title="Inclusion Nudges" />
    <div className="accent-1">
      <h3 className="text"><strong>Inclusion Nudges is a change methodology</strong> developed by Lisa Kepinski and Tinna C. Nielsen based on extensive experience as global change makers combined with their background in behavioural sciences</h3>
    </div>
  </Layout>
)

export default IndexPage
