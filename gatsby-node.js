const path = require('path')
const  slugify = require('slugify')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: { post_date: { ne: null } }}) {
        edges {
          node {
            frontmatter {
              title,
              slug,
              category
            }
          }
        }
      }
    }
  `)

  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${slugify(node.frontmatter.category, {lower: true})}/${slugify(node.frontmatter.slug, {lower: true})}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        title: node.frontmatter.title
      },
    })
  })
}
