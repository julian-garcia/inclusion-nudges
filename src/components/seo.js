import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import LogoImg from "../images/logo.jpg"

function SEO({ canonical, description, lang, 
               meta, title, googleFonts, 
               featureImageUrl, articleExcerpt }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const siteURL = typeof window !== 'undefined' ? window.location.protocol + '//' + window.location.host : '';
  const pageURL = typeof window !== 'undefined' ? window.location.pathname : '';
  const titleText = title !== site.siteMetadata.title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title;
  const imgUrl = featureImageUrl ? `${featureImageUrl}` : `${LogoImg}`;
  const metaDescription = articleExcerpt ? articleExcerpt : description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title = {titleText}
      titleTemplate={`%s`}
      link={
            canonical
              ? [{ rel: 'canonical', key: canonical, href: canonical }]
              : []
           }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${siteURL}${pageURL}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${siteURL}${imgUrl}`,
        },
        {
          property: `og:image:secure_url`,
          content: `${siteURL}${imgUrl}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: `${siteURL}${imgUrl}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        }
      ].concat(meta)}
    >
      {googleFonts && 
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet" />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  googleFonts: false
}

SEO.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  googleFonts: PropTypes.bool,
  featureImageUrl: PropTypes.string,
  articleExcerpt: PropTypes.string
}

export default SEO
