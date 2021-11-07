const path = require('path')
const slugify = require('slugify')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___featured, frontmatter___post_date], 
                                order:  [ASC, DESC] }
                        filter: { frontmatter: { post_date: { ne: null } } }) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 120, format: PLAIN)
            rawMarkdownBody
            frontmatter {
              title
              date
              slug
              category
              feature
              thumbnail
              excerpt
              featured
              authors
              post_date
              post_date_string: post_date(formatString: "MMM Do, YYYY")
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
    pageLength: 9,
    pathPrefix: '/blog',
    context: {allPosts: posts.data.allMarkdownRemark.edges}
  })

  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const firstCategory = node.frontmatter.category.split(',')[0];
    createPage({
      path: `blog/${slugify(firstCategory, {lower: true})}/${slugify(node.frontmatter.slug, {lower: true})}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        title: node.frontmatter.title
      },
    })
  })
}
