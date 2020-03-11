<p align="center">
  <a href="https://inclusion-nudges.org">
    <img alt="Gatsby" src="src/images/logo-small.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  Inclusion Nudges
</h1>

Gatsby implementation for non profit organisation [Inclusion Nudges](https://inclusion-nudges.org), currently hosted on Netlify. Content management has been configured using Netlify CMS (used for testimonials and external article/podcast/video links).

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7d6731f-169b-4c36-a55a-03573ae63739/deploy-status)](https://app.netlify.com/sites/inclusion-nudges/deploys)

## Technology Used (framework/languages)
- **Gatsby** - React based static site generator
- **Netlify, Netlify CMS** - site hosting & content management
- **Mailchimp, EmailJS** - Mailing list signup and contact form based emails
- **HTML, SCSS, JavaScript** - pages, templates and components
- **Node** 12.16.1, **npm** 6.13.4
- See [package.json](package.json) for a full list of packages used

## Structure
    ├─ src
    ├── components
    ├──── footer
    ├──── header
    ├──── layout
    ├──── modal
    ├──── slider
    ├── pages
    ├──── 404
    ├──── index
    ├──── articles-podcasts-videos
    ├── images / videos
    └──── external-media

## Developer Notes

1.  Install gatsby-cli and generate a new local project based on this implementation:

    ```shell
    gatsby new inclusion-nudges https://github.com/julian-garcia/inclusion-nudges
    ```

2.  Navigate into your new site’s directory and start it up.

    ```shell
    cd inclusion-nudges/
    gatsby develop
    ```

3.  Browse locally at: `http://localhost:8000`

