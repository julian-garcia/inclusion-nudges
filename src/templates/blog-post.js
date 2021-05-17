import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalPurchase from "../components/modal-purchase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog, faEnvelope, faPrint } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"
import { showModal } from "../components/modal"
import LeaderImg from "../images/ag-leaders.png"
import TalentImg from "../images/ag-talent-selection.png"
import AlliesImg from "../images/ag-motivating-allies.png"
import GuideFrontImg from "../images/guidebook-front.png"
import QuickReadImg from "../images/quick-read.png"
import BooksImg from "../images/book-series.png"
import SignatureImg from "../images/signature.png"

const slugify = require("slugify")

const blogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const firstCategory = frontmatter.category.split(",")[0]
  const postUrl = `https://inclusion-nudges.org/blog/${slugify(firstCategory, {
    lower: true,
  })}/${slugify(frontmatter.slug, { lower: true })}`
  const postTitle = frontmatter.title
  const customAuthor = frontmatter.authors.toLowerCase().startsWith("by ")

  return (
    <Layout
      siteTitle={`THE INCLUSION NUDGES BLOG<br/>Let’s make inclusion the norm everywhere, for everyone!`}
      alignment="center"
    >
      <SEO
        title={postTitle}
        featureImageUrl={frontmatter.thumbnail}
        articleExcerpt={frontmatter.excerpt}
      />
      <div className="accent-1 no-print strapline strapline-blog">
        <h2 className="text colour-accent-3">
          <span>
            Don’t miss out. Stay informed&nbsp;
            <br className="show-large-tablet" />
            about new blog posts.
            <br />
            <span
              role="button"
              tabIndex="0"
              className="colour-accent-3"
              style={{ cursor: "pointer" }}
              onClick={() => showModal("modal-signup-blog")}
              onKeyPress={() => {}}
            >
              Subscribe <span style={{ color: "white" }}>HERE</span>
            </span>
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
      <div
        className="blog-post blog-post__feature"
        style={{ paddingBottom: 0 }}
      >
        <h2 style={{ textAlign: "left" }}>{postTitle}</h2>
        {customAuthor && (
          <p
            className="blog-post__authors"
            dangerouslySetInnerHTML={{ __html: frontmatter.authors }}
          ></p>
        )}
        {!customAuthor && (
          <p className="blog-post__authors">
            {firstCategory.toUpperCase() !== "VOICES FROM THE COMMUNITY" && (
              <>
                By <Link to="founders">{frontmatter.authors}</Link>
              </>
            )}
            {firstCategory.toUpperCase() === "VOICES FROM THE COMMUNITY" && (
              <>By {frontmatter.authors}</>
            )}
          </p>
        )}
        <img src={frontmatter.thumbnail} alt="" />
        <div className="blog-post__social-share no-print">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="social-share__link"
            />
          </a>
          <a
            href={`http://twitter.com/share?text=${postTitle}&url=${postUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-share__link" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="social-share__link"
            />
          </a>
          <a
            href={`mailto:?&subject=${postTitle}&body=${postUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social-share__link" />
          </a>
          <button className="unstyled-button" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} className="social-share__link" />
          </button>
          <Link to="/blog" title="See all blog posts">
            <FontAwesomeIcon
              icon={faBlog}
              className="social-share__link to-blog"
            />
          </Link>
        </div>
      </div>
      <div className="blog-post the-blog" style={{ paddingBottom: 0 }}>
        <p>
          <img src={QuickReadImg} alt="" className="quick-read" />{" "}
          {Math.ceil(html.split(" ").length / 200)} minute read
        </p>
      </div>
      <div
        className="blog-post the-blog"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <div
        className="blog-post the-blog no-print"
        style={{ paddingTop: "0", paddingBottom: "0" }}
      >
        {firstCategory.toUpperCase() === "ASK LISA & TINNA" && (
          <>
            <h3 style={{ marginTop: "0" }}>
              Thank you for asking the question.
            </h3>
            <img
              src={SignatureImg}
              alt="Lisa & Tinna"
              className="modal-signature"
            />
            <h3 style={{ marginTop: "0" }}>
              Got a question about Inclusion Nudges and how to use these designs
              to achieve your diversity, equity, & inclusion initiatives?
            </h3>
            <h4>
              Send us your questions to&nbsp;
              <a
                href="mailto:tinna_and_lisa@inclusion-nudges.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "bold" }}
              >
                tinna_and_lisa@inclusion-nudges.org
              </a>
            </h4>
            <p>
              Questions will be slightly edited to fit the posting and for
              confidentiality as needed.
            </p>
          </>
        )}
        {firstCategory.toUpperCase() === "VOICES FROM THE COMMUNITY" && (
          <>
            <h3 style={{ marginTop: "0" }}>
              Would you like to be a guest blog writer about how you are
              applying Inclusion Nudges in your work? Sharing with other change
              makers like yourself is a powerful way to join forces to make
              inclusion the norm everywhere, for everyone, and by everyone.
            </h3>
            <h4>
              Reach out to Tinna C. Nielsen & Lisa Kepinski, Co-Founders
              Inclusion Nudges to discuss your article submission at&nbsp;
              <a
                href="mailto:tinna_and_lisa@inclusion-nudges.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "bold" }}
              >
                tinna_and_lisa@inclusion-nudges.org
              </a>
            </h4>
          </>
        )}
      </div>
      <div className="blog-post the-blog no-print">
        <h2 style={{ marginTop: 0 }}>Want to learn more?</h2>
        <p>
          The Inclusion Nudges Guidebook (2020) for change makers gives you 100
          examples of Inclusion Nudges
        </p>
        <div
          className="row-left-aside"
          style={{
            gridTemplateColumns: "1fr 10fr",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => showModal("modal-purchase")}
          role="button"
          onKeyPress={() => {}}
          tabIndex="0"
        >
          <div>
            <img src={GuideFrontImg} alt="" style={{ width: "100%" }} />
          </div>
          <div>
            <p>Inclusion Nudges Guidebook</p>
          </div>
        </div>
        <p style={{ marginTop: "2rem" }}>
          The Action Guide series are shorter plug-and-play guides with 30
          targeted Inclusion Nudges:
        </p>
        <div
          className="row-left-aside"
          style={{
            gridTemplateColumns: "1fr 10fr",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => showModal("ag-leaders-purchase")}
          role="button"
          onKeyPress={() => {}}
          tabIndex="0"
        >
          <div>
            <img src={LeaderImg} alt="" style={{ width: "100%" }} />
          </div>
          <div>
            <p>Inclusion Nudges for Leaders</p>
          </div>
        </div>
        <div
          className="row-left-aside"
          style={{
            gridTemplateColumns: "1fr 10fr",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => showModal("ag-talent-purchase")}
          role="button"
          onKeyPress={() => {}}
          tabIndex="0"
        >
          <div>
            <img src={TalentImg} alt="" style={{ width: "100%" }} />
          </div>
          <div>
            <p>Inclusion Nudges for Talent Selection</p>
          </div>
        </div>
        <div
          className="row-left-aside"
          style={{ gridTemplateColumns: "1fr 10fr", cursor: "pointer" }}
          onClick={() => showModal("ag-allies-purchase")}
          role="button"
          onKeyPress={() => {}}
          tabIndex="0"
        >
          <div>
            <img src={AlliesImg} alt="" style={{ width: "100%" }} />
          </div>
          <div>
            <p>Inclusion Nudges for Motivating Allies</p>
          </div>
        </div>
        <p>
          You can learn more and get other free resources on the Inclusion
          Nudges platform <Link to="/">inclusion-nudges.org</Link>
        </p>
      </div>
      <ModalPurchase />
      <ModalPurchase modalClass="ag-leaders-purchase" />
      <ModalPurchase modalClass="ag-talent-purchase" />
      <ModalPurchase modalClass="ag-allies-purchase" />
    </Layout>
  )
}

export default blogPost

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        authors
        thumbnail
        slug
        excerpt
        category
      }
    }
  }
`
