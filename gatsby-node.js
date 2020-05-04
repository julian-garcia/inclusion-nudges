const path = require('path')
const fetch = require('node-fetch');
const mediumPosts = fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40InclusionNudges&api_key=${process.env.GATSBY_RSS_JSON_API}`)
  .then(response => response.json() )
  .then(mediumPost => { 
    return mediumPost.items.filter(item => item.categories.length > 0); 
  });

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const awaitData = await mediumPosts;
  
  awaitData.forEach((post,i) => {
    createPage({
      path: `/blog/${post.title.toLowerCase().replace(/\s/g,'-')}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: post
    })
  }); 
}