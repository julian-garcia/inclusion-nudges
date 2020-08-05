import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="accent-2">
        <h2 className="text">Don’t miss out. Stay informed about new blog posts. <span className="colour-accent-3">Subscribe HERE</span></h2>
      </div>
      <div className="center-content">
        <p style={{textAlign:'center'}}>This blog is part of the Inclusion Nudges global initiative. www.inclusion-nudges.org</p>
        <h2 className="page-heading">Welcome to the Inclusion Nudges blog  </h2>
      
        <p><strong>We are Lisa Kepinski and Tinna C. Nielsen</strong> <br/> We are the Founders of the Inclusion Nudges global initiative, the authors of The Inclusion Nudges Guidebook and the Action Guide Series, <strong>We are designing to increase diversity, equity, and inclusion in behaviours, cultures, and systems in organisations & communities around the world.</strong></p>

        <p><strong>These blog posts give you inspiration and practical actions to make inclusion the norm everywhere, for everyone. </strong><br/> We share with you our personal and professional insights, learnings, passion, and expertise based on our extensive experience of leading change efforts combined with our backgrounds in behavioural sciences. We give you some eye-openers and make sure you can apply the Inclusion Nudges change approach. </p>

        <p><strong>We will sprinkle the seriousness of these topics with a dash of humour</strong><br/>– because let’s face it, the irrationalities of human behaviour is leading to absurdities that we will have to embrace to change, and playfulness is proven to be crucial catalysts for change.</p>
      </div>
      <Blog posts={data} />
    </Layout>
  )
}

export default BlogPage

export const blogPostsQuery = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 60, format: PLAIN)
          rawMarkdownBody
          frontmatter {
            title
            date
            slug
            category
            thumbnail
            post_date
          }
        }
      }
    }
  }
`