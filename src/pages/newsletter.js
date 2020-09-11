import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const MarkdownIt = require('markdown-it');
const  slugify = require('slugify')

const NewsletterPage = ({ data }) => {
  const newsLetterContent = data.newsletter.edges[0].node.frontmatter;
  const blogPosts = data.blog.edges;
  const signupImgUrl = data.signupImgUrl.edges[0].node.publicURL;
  const foundersImgUrl = data.foundersImgUrl.edges[0].node.publicURL;
  const signatureImgUrl = data.signatureImgUrl.edges[0].node.publicURL;
  const insightsImgUrl = data.insightsImgUrl.edges[0].node.publicURL;
  const latestImgUrl = data.latestImgUrl.edges[0].node.publicURL;
  const bookSeriesImgUrl = data.bookSeriesImgUrl.edges[0].node.publicURL;

  return (
    <Layout siteTitle={`INCLUSION NUDGES<br/>NEWS & BLOG<br/><a href="https://inclusion-nudges.org">inclusion-nudges.org</a>`} alignment='center' footer={false}>
      <SEO title="Inclusion Nudges News & Blog" googleFonts={true} />
      <div className="accent-1">
        <h3 className="text" style={{textAlign:'center', maxWidth:'unset'}}>
          Inclusion Nudges is a change & design approach. Based on behavioural sciences and change maker experience. Developed in 2013 by Tinna C. Nielsen & Lisa Kepinski.<br/>The global Inclusion Nudges initiative, guidebooks and blog is about  empowering and sharing examples of Inclusion Nudges.<br/>Together we make inclusion the norm—everywhere, for everyone, by everyone!
        </h3>
      </div>
      <div className="newsletter">
        <div className="newsletter__headline">
          <div className="newsletter__headline-text">
            <h2 className="colour-accent-2">From the Founders</h2>
            {newsLetterContent.founders}
          </div>
          <div className="newsletter__headline-image">
            <img src={foundersImgUrl} alt="Founders" /><br/>
            <img src={signatureImgUrl} alt="" />
            <h4>Tinna C. Nielsen & Lisa Kepinski<br/>Founders, Inclusion Nudges</h4>
          </div>
        </div>
        <hr/>
        <div className="newsletter__section">
          <div>
            <img src={insightsImgUrl} alt="" />
          </div>
          <div>
            <h2 className="colour-accent-2">Our Favourite Insights on Behaviour & Inclusion</h2>
            <div dangerouslySetInnerHTML={{ __html: new MarkdownIt().render(newsLetterContent.insights) }}></div>
          </div>
        </div>
        <hr/>
        <div className="newsletter__section">
          <div>
            <img src={latestImgUrl} alt="" />
          </div>
          <div>
            <h2 className="colour-accent-2">The Latest Inclusion Nudges Blog Articles</h2>
          </div>
        </div>
        <div className="newsletter__blog accent-4">
          <div>
            {blogPosts.slice(0, 4).map((post, i) => (
              <a href={`https://inclusion-nudges.org/blog/${slugify(post.node.frontmatter.category.split(',')[0], {lower: true})}/${slugify(post.node.frontmatter.slug, {lower: true})}`} className="newsletter__blog-link" key={i}>
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
        <hr/>
        <div className="newsletter__section">
          <div>
            <a href={newsLetterContent.coming_up_link} className="newsletter__signup">
              <img src={signupImgUrl} alt="" /><br/>Sign up here...
            </a>
          </div>
          <div>
            <h2 className="colour-accent-2">Coming Up...</h2>
            <div dangerouslySetInnerHTML={{ __html: new MarkdownIt().render(newsLetterContent.coming_up) }}></div>
          </div>
        </div>
        <hr/>
        <div className="newsletter__headline">
          <div className="newsletter__headline-text">
            <h2 className="colour-accent-2">Learn More & Order</h2>
            <p>The Inclusion Nudges Guidebook and the Action Guide Series</p>
          </div>
          <div className="newsletter__headline-image">
            <a href="https://inclusion-nudges.org"><img src={bookSeriesImgUrl} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="footer-address no-print">
        <h4 className="footer-address__text">Inclusion Nudges is a non-profit organisation registered in Denmark. VAT: 39140071 Fuglesangs Alle 11, 8210 DK-Aarhus</h4>
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
    signupImgUrl: allFile(filter: {absolutePath: {regex: "/images/newsletter/signup.png/"}}) {
      edges { node { publicURL } }
    }
    foundersImgUrl: allFile(filter: {absolutePath: {regex: "/images/newsletter/lisa-tinna.png/"}}) {
      edges { node { publicURL } }
    }
    signatureImgUrl: allFile(filter: {absolutePath: {regex: "/images/newsletter/signature.png/"}}) {
      edges { node { publicURL } }
    }
    insightsImgUrl: allFile(filter: {absolutePath: {regex: "/images/newsletter/insights.png/"}}) {
      edges { node { publicURL } }
    }
    latestImgUrl: allFile(filter: {absolutePath: {regex: "/images/newsletter/latest.png/"}}) {
      edges { node { publicURL } }
    }
    bookSeriesImgUrl: allFile(filter: {absolutePath: {regex: "/images/newsletter/book-series.png/"}}) {
      edges { node { publicURL } }
    }
  }
`