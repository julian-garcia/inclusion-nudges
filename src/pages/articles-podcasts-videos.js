import React from "react"
import { graphql, Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostGridItem from "../components/post-grid-item"
import { showModal } from "../components/modal"
import ModalVideo from "../components/modal-video"

import LogoImg from "../images/logo-transparent.png"
import BehaviourImg from "../images/behavioural-designs.png"
import BehaviourVideo from "../videos/behavioural-designs.mp4"
import BooksImg from "../images/book-series.png"

const ExternalMediaPage = ({ data }) => {
  const externalMediaData = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Articles, Podcasts, Videos" />
      <div className="accent-1 strapline">
        <h2 className="text">
          <span className="pad-right">
            Articles, Podcasts, Videos, Blog
            <Link
              className="book-series"
              onClick={() => scrollTo("#books")}
              to={"/#books"}
            >
              <img src={BooksImg} alt="" />
            </Link>
          </span>
        </h2>
        <Link
          className="book-series mobile"
          onClick={() => scrollTo("#books")}
          to={"/#books"}
        >
          <img src={BooksImg} alt="" />
        </Link>
      </div>
      <div className="post-grid">
        <div className="col founders">
          <h2>By the Founders</h2>
          <span className="subtitle">
            We write for our own blog, as well as other platforms and media
            outlets. Here is a selection.
          </span>
          <hr />
          <div className="post-grid__item">
            <button
              onClick={() => showModal("modal-video-1")}
              className="post-grid__title"
            >
              <img src={LogoImg} className="post-grid__image" alt="" />
              <span>
                Listen to the Founders introducing Inclusion&nbsp;Nudges
              </span>
            </button>
          </div>
          <div className="post-grid__item">
            <Link to="blog" className="dark post-grid__title">
              <img src={LogoImg} className="post-grid__image" alt="" />
              <span>Inclusion Nudges Blog</span>
            </Link>
          </div>
          {externalMediaData.map(
            ({ node }, i) =>
              node.frontmatter.category === "By the Founders" && (
                <PostGridItem
                  key={i}
                  title={node.frontmatter.title}
                  link={node.frontmatter.link}
                  imageUrl={node.frontmatter.thumbnail}
                />
              )
          )}
        </div>
        <div className="col podcasts">
          <h2>Featured in podcasts</h2>
          <span className="subtitle"></span>
          <hr />
          {externalMediaData.map(
            ({ node }, i) =>
              node.frontmatter.category === "Featured in Podcasts" && (
                <PostGridItem
                  key={i}
                  title={node.frontmatter.title}
                  link={node.frontmatter.link}
                  imageUrl={node.frontmatter.thumbnail}
                />
              )
          )}
        </div>
        <div className="col community">
          <h2>By people in this community</h2>
          <span className="subtitle"></span>
          <hr />
          <h3 style={{ marginTop: "1rem" }}>
            Have you written about Inclusion Nudges?
          </h3>
          <button
            onClick={() => showModal("modal")}
            className="modal-form__button"
            style={{ margin: ".2rem 0 1rem 0" }}
          >
            Let us know
          </button>
          {externalMediaData.map(
            ({ node }, i) =>
              node.frontmatter.category === "By people in this community" && (
                <PostGridItem
                  key={i}
                  title={node.frontmatter.title}
                  link={node.frontmatter.link}
                  imageUrl={node.frontmatter.thumbnail}
                />
              )
          )}
        </div>
      </div>
      <ModalVideo
        videoClass="modal-video-1"
        videoUrl={BehaviourVideo}
        placeHolder={BehaviourImg}
        signature="Lisa Kepinski and Tinna C. Nielsen"
        roles="Applying Behavioural Designs for Inclusion"
      />
    </Layout>
  )
}

export default ExternalMediaPage

export const externalMediaQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___sequence, frontmatter___title]
        order: ASC
      }
    ) {
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
