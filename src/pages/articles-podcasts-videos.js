import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostGridItem from "../components/post-grid-item"
import { showModal } from "../components/modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import LogoImg from "../images/logo-transparent.png"

const ExternalMediaPage = ({ data }) => {
  const externalMediaData = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Articles, Podcasts, Videos" />
      <div className="accent-1">
        <h2 className="text">Articles, Podcasts, Videos, Blog</h2>
      </div>
      <div className="post-grid">
        <div className="col founders">
          <h2>By the Founders</h2>
          <hr/>
          <div className="post-grid__item">
            <a href="https://medium.com/@InclusionNudges" target="_blank" title="Inclusion Nudges Medium" className="dark post-grid__title" rel="noopener noreferrer">
              <img src={LogoImg} className="post-grid__image" alt="Feature" />
              <span>Inclusion Nudges Blog <FontAwesomeIcon icon={faMediumM} /></span>
            </a>
          </div>
          {externalMediaData.map(({node}, i) => (
            node.frontmatter.category === 'By the Founders' &&
            <PostGridItem key={i}
                          title={node.frontmatter.title} 
                          link={node.frontmatter.link} 
                          imageUrl={node.frontmatter.thumbnail} />
          ))}
        </div>
        <div className="col podcasts">
          <h2>Featured in podcasts</h2>
          <hr/>
          {externalMediaData.map(({node}, i) => (
            node.frontmatter.category === 'Featured in Podcasts' &&
            <PostGridItem key={i}
                          title={node.frontmatter.title} 
                          link={node.frontmatter.link} 
                          imageUrl={node.frontmatter.thumbnail} />
          ))}
        </div>
        <div className="col community">
          <h2>By people in this community</h2>
          <hr/>
          <h3 style={{marginTop:'1rem'}}>Have you written about Inclusion Nudges?</h3>
          <button onClick={() => showModal('modal')} className="modal-form__button" style={{margin:'.2rem 0 1rem 0'}}>Let us know</button>
          {externalMediaData.map(({node}, i) => (
            node.frontmatter.category === 'By people in this community' &&
            <PostGridItem key={i}
                          title={node.frontmatter.title} 
                          link={node.frontmatter.link} 
                          imageUrl={node.frontmatter.thumbnail} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ExternalMediaPage

export const externalMediaQuery = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: [frontmatter___sequence, frontmatter___title],
      order: ASC
    }) {
      edges {
        node {
          frontmatter {
            title
            category
            link
            thumbnail
          }
        }
      }
    }
  }
`