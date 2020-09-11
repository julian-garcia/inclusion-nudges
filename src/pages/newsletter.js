import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import FoundersImg from "../images/newsletter/lisa-tinna.png"
import SignImg from "../images/newsletter/signature.png"
import InsightsImg from "../images/newsletter/insights.png"
import BlogImg from "../images/newsletter/latest.png"
import SignupImg from "../images/newsletter/signup.png"
import BooksImg from "../images/newsletter/book-series.png"

const MarkdownIt = require('markdown-it');
const  slugify = require('slugify')

const NewsletterPage = ({ data }) => {
  const newsLetterContent = data.newsletter.edges[0].node.frontmatter;
  const blogPosts = data.blog.edges;

  return (
    <Layout siteTitle={`INCLUSION NUDGES<br/>NEWS & BLOG<br/><a href="https://inclusion-nudges.org">inclusion-nudges.org</a>`} alignment='center'>
      <SEO title="Inclusion Nudges News & Blog" />
      <div className="accent-1">
        <h3 className="text" style={{textAlign:'center', maxWidth:'unset'}}>
          Inclusion Nudges is a change & design approach. Based on behavioural sciences and change maker experience. Developed in 2013 by Tinna C. Nielsen & Lisa Kepinski.<br/>The global Inclusion Nudges initiative, guidebooks and blog is about  empowering and sharing examples of Inclusion Nudges.<br/>Together we make inclusion the norm—everywhere, for everyone, by everyone!
        </h3>
      </div>
      <div className="newsletter">
        <section className="newsletter__headline">
          <div className="newsletter__headline-text">
            <h2 className="colour-accent-2">From the Founders</h2>
            {newsLetterContent.founders}
          </div>
          <div className="newsletter__headline-image">
            <img src={FoundersImg} alt="Founders" /><br/>
            <img src={SignImg} alt="" />
            <h4>Tinna C. Nielsen & Lisa Kepinski<br/>Founders, Inclusion Nudges</h4>
          </div>
        </section>
        <hr/>
        <section className="newsletter__section">
          <div>
            <img src={InsightsImg} alt="" />
          </div>
          <div>
            <h2 className="colour-accent-2">Our Favourite Insights on Behaviour & Inclusion</h2>
            <div dangerouslySetInnerHTML={{ __html: new MarkdownIt().render(newsLetterContent.insights) }}></div>
          </div>
        </section>
        <hr/>
        <section className="newsletter__section">
          <div>
            <img src={BlogImg} alt="" />
          </div>
          <div>
            <h2 className="colour-accent-2">The Latest Inclusion Nudges Blog Articles</h2>
          </div>
        </section>
        <section className="newsletter__blog accent-4">
          <div>
            {blogPosts.slice(0, 4).map(post => (
              <a href={`https://inclusion-nudges.org/blog/${slugify(post.node.frontmatter.category.split(',')[0], {lower: true})}/${slugify(post.node.frontmatter.slug, {lower: true})}`} className="newsletter__blog-link">
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.excerpt}</p>
              </a>
            ))}
          </div>
        </section>
        <hr/>
        <section className="newsletter__section">
          <div>
            <a href={newsLetterContent.coming_up_link} className="newsletter__signup">
              <img src={SignupImg} alt="" /><br/>Sign up here...
            </a>
          </div>
          <div>
            <h2 className="colour-accent-2">Coming Up...</h2>
            <div dangerouslySetInnerHTML={{ __html: new MarkdownIt().render(newsLetterContent.coming_up) }}></div>
          </div>
        </section>
        <hr/>
        <section className="newsletter__headline">
          <div className="newsletter__headline-text">
            <h2 className="colour-accent-2">Learn More & Order</h2>
            <p>The Inclusion Nudges Guidebook and the Action Guide Series</p>
          </div>
          <div className="newsletter__headline-image">
            <a href="https://inclusion-nudges.org"><img src={BooksImg} alt="" /></a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NewsletterPage

export const newsletterQuery = graphql`
  query {
    newsletter: allMarkdownRemark(sort: {
      fields: [frontmatter___publication_date],
      order: DESC
    }, filter: {frontmatter: {publication_date: {ne: null}}}) {
      edges {
        node {
          frontmatter {
            founders
            insights
            coming_up
            coming_up_link
            publication_date
          }
        }
      }
    }
    blog: allMarkdownRemark(sort: {
      fields: [frontmatter___post_date],
      order: DESC
    }, filter: {frontmatter: {post_date: {ne: null}}}) {
      edges {
        node {
          frontmatter {
            post_date
            excerpt
            title
            slug
            category
          }
        }
      }
    }
  }
`