import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({posts}) => (
  <>
    <h2 className="page-heading">Inclusion Nudges Blog</h2>
    <div className="row-auto indented-row blog" style={{gap:'1rem'}}>
      {posts.allSitePage.edges.map((post, i) => (
        post.node.context.link && i < 3 &&
        <div key={i}>
          <Link to={`/blog/${post.node.context.title.toLowerCase().replace(/\s/g,'-')}`} dangerouslySetInnerHTML={{ __html: post.node.context.title }}></Link>
        </div>
      ))}
      <div>
        <Link to='/blog' className="modal-form__button" style={{margin:'0'}}>More blog posts...</Link>
      </div>
    </div>
  </>
)

Blog.propTypes = {
  posts: PropTypes.object
}

export default Blog
