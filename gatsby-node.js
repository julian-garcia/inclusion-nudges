const path = require('path')
const  slugify = require('slugify')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___post_date], order: DESC }
                        filter: { frontmatter: { post_date: { ne: null } } }) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 60, format: PLAIN)
            rawMarkdownBody
            frontmatter {
              title
              date
              slug
              category
              thumbnail
              post_date
            }
          }
        }
      }
    }
  `)

  createPaginatedPages({
    edges: posts.data.allMarkdownRemark.edges,
    createPage: createPage,
    pageTemplate: 'src/templates/blog-list.js',
    pageLength: 3,
    pathPrefix: '/blog',
    context: {allPosts: posts.data.allMarkdownRemark.edges}
  })

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
