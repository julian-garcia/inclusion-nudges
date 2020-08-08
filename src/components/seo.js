import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import LogoImg from "../images/logo.jpg"

function SEO({ canonical, description, lang, meta, title }) {
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

  const metaDescription = description || site.siteMetadata.description
  const siteURL = typeof window !== 'undefined' ? window.location.protocol + '//' + window.location.host : '';
  const titleText = title !== site.siteMetadata.title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title

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
          content: siteURL,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${siteURL}${LogoImg}`,
        },
        {
          property: `og:image:secure_url`,
          content: `${siteURL}${LogoImg}`,
        },
        {
          property: `og:image:width`,
          content: `200`,
        },
        {
          property: `og:image:height`,
          content: `200`,
        },
        {
          property: `og:image:type`,
          content: `image/jpeg`,
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
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
