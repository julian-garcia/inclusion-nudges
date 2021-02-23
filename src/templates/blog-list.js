import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { showModal } from "../components/modal"
import SocialShare from "../components/social-share"
import BooksImg from "../images/book-series.png"
import scrollTo from "gatsby-plugin-smoothscroll"

const slugify = require("slugify")

const Blog = ({ pageContext, location }) => {
  const { group, index, first, last, pageCount, allPosts } = pageContext
  const previousUrl =
    index - 1 === 1 ? "/blog" : "/blog/" + (index - 1).toString()
  const nextUrl = "/blog/" + (index + 1).toString()
  const [filteredPosts, setFilteredPosts] = useState(group)
  const uniqueCategories = [...new Set(getCategories(allPosts))]
  let pageArray = []
  for (let i = 1; i <= pageCount; i++) {
    pageArray.push(i)
  }

  const pageNum = location.pathname.split("/")[2]
  const currentPage = !pageNum ? 1 : parseInt(pageNum)

  function getPosts(e, posts, category) {
    document.querySelectorAll(".blog__category").forEach(ctgy => {
      ctgy.classList.remove("active")
    })
    e.target.classList.add("active")
    document.querySelector(".blog__search-input").value = ""

    setFilteredPosts(
      posts.filter(
        item =>
          item.node.frontmatter.category
            .split(",")
            .map(s => s.trim().toLowerCase())
            .includes(category) || category === "all"
      )
    )
  }

  function searchBlog(event, posts) {
    document.querySelectorAll(".blog__category").forEach(ctgy => {
      ctgy.classList.remove("active")
    })
    document.querySelectorAll(".blog__category")[0].classList.add("active")
    const regExpr = /[^a-z0-9]+/gi
    const searchString = event.target.value.toLowerCase().replace(regExpr, "")
    if (searchString) {
      if (searchString.length >= 3) {
        setFilteredPosts(
          posts.filter(
            item =>
              item.node.rawMarkdownBody
                .toLowerCase()
                .replace(regExpr, "")
                .includes(searchString) ||
              item.node.frontmatter.title
                .toLowerCase()
                .replace(regExpr, "")
                .includes(searchString)
          )
        )
      }
    } else {
      setFilteredPosts(group)
    }
  }

  return (
    <Layout
      siteTitle={`THE INCLUSION NUDGES BLOG<br/><span class="blog-subtitle">Let’s make inclusion the norm</span><span class="blog-subtitle">- everywhere, for&nbsp;everyone,&nbsp;by&nbsp;everyone!</span>`}
      alignment="center"
    >
      <SEO
        title="Blog"
        description="The Inclusion Nudges blog is a go-to resource for people wanting to make changes in their organisations, communities, and society. Inclusion Nudges are a proven change approach. The change makers and inclusion experts Lisa Kepinski and Tinna C. Nielsen share with you practical behavioural designs, insights, and actions to make inclusion the norm everywhere, for everyone."
      />
      <div className="accent-1 strapline strapline-blog">
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
        className="center-content blog-intro"
        style={{ textAlign: "center", maxWidth: "860px", margin: "2rem auto" }}
      >
        <p>
          <strong>
            We are <Link to="/founders">Lisa Kepinski</Link> and{" "}
            <Link to="/founders">Tinna C. Nielsen</Link>,
          </strong>
          <br />
          the Founders of the Inclusion Nudges global initiative{" "}
          <Link to="/">www.inclusion-nudges.org</Link> and authors of The
          Inclusion Nudges Guidebook and the Action Guide Series.
        </p>
        <p>
          <strong>In this blog</strong> we share our personal and professional
          insights from leading change efforts for more diverse, equal, and
          inclusive organisations and communities worldwide.
          <br />
          <strong>Our purpose</strong> is to inspire and empower you to apply
          behavioural insights and the Inclusion Nudges change approach to make
          impactful change in your sphere of influence.
        </p>
      </div>
      <div className="blog" id="blog">
        <div className="indented-row">
          <div className="blog__categories">
            <span className="blog__categories-title">Categories: </span>
            <button
              className="blog__category active"
              onClick={e => {
                getPosts(e, group, "all")
              }}
            >
              all
            </button>
            {uniqueCategories.map((category, i) => (
              <button
                className="blog__category"
                onClick={e => {
                  getPosts(e, allPosts, category)
                }}
                key={`key${i}`}
              >
                {category}
              </button>
            ))}
            <input
              type="text"
              className="blog__search-input"
              id="blogSearch"
              onChange={e => searchBlog(e, allPosts)}
              placeholder="SEARCH OUR BLOG"
            ></input>
          </div>
        </div>
        <div className="indented-row row-auto">
          {filteredPosts.map(({ node }, i) => {
            const ellipsis = node.frontmatter.title.length > 60 ? "..." : ""
            const postTitle =
              node.frontmatter.title
                .toLowerCase()
                .split(" ")
                .map(word => {
                  return word.charAt(0).toUpperCase() + word.slice(1)
                })
                .join(" ")
                .substr(0, 60) + ellipsis
            return (
              <div className="blog__card" key={`key${i}`}>
                <div
                  className="blog__image"
                  style={{
                    backgroundImage: `url(${node.frontmatter.thumbnail})`,
                  }}
                ></div>
                <h3 className="blog__title">{postTitle}</h3>
                <p className="blog__excerpt">
                  {node.frontmatter.excerpt
                    ? node.frontmatter.excerpt.substr(0, 150) + "..."
                    : node.excerpt}
                </p>
                {/* <span className="blog__date">{node.frontmatter.post_date_string}</span> */}
                <a
                  className="blog__link"
                  href={`/blog/${slugify(
                    node.frontmatter.category.split(",")[0],
                    { lower: true }
                  )}/${slugify(node.frontmatter.slug, { lower: true })}`}
                >
                  Continue Reading
                </a>
                <a
                  className="blog__link-card"
                  href={`/blog/${slugify(
                    node.frontmatter.category.split(",")[0],
                    { lower: true }
                  )}/${slugify(node.frontmatter.slug, { lower: true })}`}
                >
                  {" "}
                </a>
              </div>
            )
          })}
        </div>
        {pageCount > 0 && (
          <div className="indented-row blog-page-nav">
            {first && (
              <span className="blog-page__prev modal-form__button inactive">
                Back
              </span>
            )}
            {!first && (
              <Link
                className="blog-page__prev modal-form__button"
                to={previousUrl}
              >
                Back
              </Link>
            )}
            <div>
              {!(first && last) &&
                pageArray.map((pageNum, i) => {
                  pageNum = pageNum === 1 ? "" : pageNum
                  return (
                    <Link
                      className={`blog-page__number ${
                        currentPage === (pageNum || 1) ? "active" : ""
                      }`}
                      to={`/blog${pageNum ? "/" : ""}${pageNum}`}
                      key={i}
                    >
                      {pageNum || 1}
                    </Link>
                  )
                })}
            </div>
            {last && (
              <span className="blog-page__next modal-form__button inactive">
                More Posts...
              </span>
            )}
            {!last && (
              <Link className="blog-page__next modal-form__button" to={nextUrl}>
                More Posts...
              </Link>
            )}
          </div>
        )}
      </div>
      <SocialShare origin="blog" />
    </Layout>
  )
}

function getCategories(posts) {
  let categories = []
  posts.filter(item => {
    if (item.node.frontmatter.post_date) {
      item.node.frontmatter.category.split(",").forEach(cat => {
        categories.push(cat.trim().toLowerCase())
      })
      return true
    }
    return false
  })

  return categories.sort()
}

export default Blog
