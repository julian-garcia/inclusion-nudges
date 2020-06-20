const path = require('path')
const fetch = require('node-fetch');
const mediumPosts = fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40InclusionNudges&api_key=${process.env.GATSBY_RSS_JSON_API}`)
  .then(response => response.json() )
  .then(mediumPost => { 
    return mediumPost.items.filter(item => item.categories.length > 0); 
  });

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const awaitData = await mediumPosts;
  
  awaitData.forEach((post) => {
    createPage({
      path: `/blog/${post.title.toLowerCase().replace(/\s/g,'-').replace(/[^0-9a-z\-]/gi,'')}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: post
    })
  }); 

  const pages = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: { slug: { ne: null } }}) {
        edges {
          node {
            frontmatter {
              title,
              slug
            }
          }
        }
      }
    }
  `)

  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/templates/page.js'),
      context: {
        title: node.frontmatter.title
      },
    })
  })
}

