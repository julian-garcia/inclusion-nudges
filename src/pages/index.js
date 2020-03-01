import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImg from "../images/gatsby-astronaut.png"
import HomeImg2 from "../images/gatsby-icon.png"

const IndexPage = () => (
  <Layout pageTitle="Hi">
    <SEO title="Inclusion Nudges" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <picture>
        <source media="(min-width: 0; max-width: 649px)" srcSet={HomeImg2} />
        <source media="(min-width: 650px)" srcSet={HomeImg} />
        <img src={HomeImg2} alt="" />
      </picture>
    </div>
    <Link to="/404/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
