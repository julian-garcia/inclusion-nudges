require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
  
module.exports = {
  siteMetadata: {
    title: `Inclusion Nudges`,
    description: `The Inclusion Nudges global initiative is on a mission of making inclusion the norm everywhere, for everyone. You to make it happen in your organisation and community by applying the Inclusion Nudges change approach. We empower you with The Inclusion Nudges Guidebook and the Action Guide Series, as well as expertise support to design Inclusion Nudges in your organisation and coaching for change makers. Learn more...`,
    author: `@inclusionnudges`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
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
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: `${process.env.MAILCHIMP_ENDPOINT}`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
