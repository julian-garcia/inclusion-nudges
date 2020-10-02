import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const OrganisationsPage = ({ data }) => {
  const partners = data.allMarkdownRemark.edges;
  const groupSize = Math.ceil(partners.length / 6);

  return (
  <Layout siteTitle={`ORGANISATIONS WE PARTNER WITH &<br>ORGANISATIONS USING INCLUSION&nbsp;NUDGES`} >
    <SEO title="Organisations" />
    <div className="accent-1">
      <h2 className="text">Want to work with us? <Link to="" className="colour-accent-3">inclusion-nudges.org</Link><span>, </span> 
      <a href="mailto:tinna_and_lisa@inclusion-nudges.org" className="colour-accent-3">tinna_and_lisa@inclusion-nudges.org</a></h2>
    </div>
    <div className="row-auto organisations">
      <div>
        {partners.map(({node}, i) => (
          i <= groupSize &&
          <h3 key={i}>{node.frontmatter.partner}</h3>
        ))}
      </div>
      <div>
        {partners.map(({node}, i) => (
          i > groupSize && i <= groupSize * 2 &&
          <h3 key={i}>{node.frontmatter.partner}</h3>
        ))}
      </div>
      <div>
        {partners.map(({node}, i) => (
          i > groupSize * 2 && i <= groupSize * 3 &&
          <h3 key={i}>{node.frontmatter.partner}</h3>
        ))}
      </div>
      <div>
        {partners.map(({node}, i) => (
          i > groupSize * 3 && i <= groupSize * 4 &&
          <h3 key={i}>{node.frontmatter.partner}</h3>
        ))}
      </div>
      <div>
        {partners.map(({node}, i) => (
          i > groupSize * 4 && i <= groupSize * 5 &&
          <h3 key={i}>{node.frontmatter.partner}</h3>
        ))}
      </div>
      <div>
        {partners.map(({node}, i) => (
          i > groupSize * 5 && i <= groupSize * 6 &&
          <h3 key={i}>{node.frontmatter.partner}</h3>
        ))}
      </div>
    </div>
    <div className="row-auto organisations">
      <div>
        <h3>United Nations: UN Women, UNIDO, UN Secretary General’s Office, WHO, UNAIDS, UNODC, UNOPS, UNDP, UNIOM, UNHRC, UNHCR, World Food Programme, and more)</h3>
        <h3>Many Equalities Organisations and Nudge Units around the world</h3>
        <h3 style={{textAlign:'center', marginTop:'1rem'}}>And many more...</h3>
      </div>
      <div style={{textAlign:'right'}}>
        <h2 className="colour-accent-1" style={{marginTop:'0'}}>Want to work with us?</h2>
        <h3><Link to="">inclusion-nudges.org</Link></h3>
        <h3><a href="mailto:tinna_and_lisa@inclusion-nudges.org">tinna_and_lisa@inclusion-nudges.org</a></h3>
      </div>
    </div>
  </Layout>
  )
}

export default OrganisationsPage

export const partnersQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {partner: {ne: null}}}, 
      sort:   {fields: frontmatter___partner}) {
      edges {
        node {
          frontmatter { partner }
        }
      }
    }
  }
`