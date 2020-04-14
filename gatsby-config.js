require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
  
module.exports = {
  siteMetadata: {
    title: `Inclusion Nudges`,
    description: `Inclusion Nudges is a global initiative of people making inclusion the new normal—everywhere, for everyone`,
    author: `@inclusionnudges`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla\:400,700`,
          `cormorant garamond\:300,500,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: `${process.env.MAILCHIMP_ENDPOINT}`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
