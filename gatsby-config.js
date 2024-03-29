require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const slugify = require("slugify")

module.exports = {
  siteMetadata: {
    title: `Inclusion Nudges`,
    description: `The Inclusion Nudges global initiative is on a mission of making inclusion the norm everywhere, for everyone. You to make it happen in your organisation and community by applying the Inclusion Nudges change approach. We empower you with The Inclusion Nudges Guidebook and the Action Guide Series, as well as expertise support to design Inclusion Nudges in your organisation and coaching for change makers. Learn more...`,
    blogDescription: `The Inclusion Nudges blog is a go-to resource for people wanting to make changes in their organisations, communities, and society. Inclusion Nudges are a proven change approach. The change makers and inclusion experts Lisa Kepinski and Tinna C. Nielsen share with you practical behavioural designs, insights, and actions to make inclusion the norm everywhere, for everyone.`,
    author: `@inclusionnudges`,
    siteUrl: `https://inclusion-nudges.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noreferrer",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://inclusion-nudges.org`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `inclusion-nudges`,
        short_name: `inclusion`,
        start_url: `/`,
        background_color: `#5f264f`,
        theme_color: `#5f264f`,
        display: `minimal-ui`,
        icon: `src/images/logo-small.jpg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/content/testimonials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `external`,
        path: `${__dirname}/content/external`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter`,
        path: `${__dirname}/content/newsletter`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `organisations`,
        path: `${__dirname}/content/organisations`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: `${process.env.GATSBY_MAILCHIMP_ENDPOINT}`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [`${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description: blogDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const firstCategory = edge.node.frontmatter.category.split(
                  ","
                )[0]
                const postTitle = edge.node.frontmatter.title.replace(
                  /\b(\w)/gi,
                  match => {
                    return (
                      match.charAt(0).toUpperCase() +
                      match.slice(1).toLowerCase()
                    )
                  }
                )

                return Object.assign({}, edge.node.frontmatter, {
                  title: postTitle,
                  description: edge.node.frontmatter.excerpt
                    ? edge.node.frontmatter.excerpt
                    : edge.node.excerpt,
                  date: edge.node.frontmatter.post_date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    slugify(firstCategory, { lower: true }) +
                    "/" +
                    slugify(edge.node.frontmatter.slug, { lower: true }),
                  guid:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    slugify(firstCategory, { lower: true }) +
                    "/" +
                    slugify(edge.node.frontmatter.slug, { lower: true }),
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___post_date] },
                  filter: { frontmatter: { post_date: {ne: null} } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        excerpt
                        slug
                        category
                        post_date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Inclusion Nudges Blog",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
