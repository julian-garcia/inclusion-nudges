import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const customPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="accent-1">
        <h2 className="text" dangerouslySetInnerHTML={{ __html: frontmatter.title }}></h2>
      </div>
      <div className="blog-post" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default customPage

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
