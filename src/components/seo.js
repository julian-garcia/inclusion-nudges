import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        allFile(filter: {name: {eq: "logo"}}) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteURL = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title = { title !== site.siteMetadata.title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title }
      titleTemplate={`%s`}
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
          content: `${siteURL}${allFile.edges[0].node.publicURL.substr(1)}`,
        },
        {
          property: `og:image:secure_url`,
          content: `${siteURL}${allFile.edges[0].node.publicURL.substr(1)}`,
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
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
