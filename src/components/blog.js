import React, { useState } from "react"
import PropTypes from "prop-types"
const  slugify = require('slugify')

const Blog = ({posts}) => {
  let allPosts = posts.allMarkdownRemark.edges
    .filter((item) => (item.node.frontmatter.post_date));
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const uniqueCategories = [...new Set(getCategories(allPosts))];

  function getPosts(posts, category) {
    document.querySelector('.blog__search-input').value = '';
    setFilteredPosts(posts.filter((item) => 
      (item.node.frontmatter.category === category || category === 'all')))
  }

  function searchBlog(event, posts) {
    const searchString = event.target.value.toLowerCase();
    setFilteredPosts(posts.filter((item) => 
      (item.node.rawMarkdownBody.toLowerCase().includes(searchString))))
  }
  
  return (
    <div className="blog">
      <div className="indented-row">
        <div className="blog__categories">
          <span className="blog__categories-title">Categories: </span>
          <button className="blog__category" onClick={() => { getPosts(allPosts, 'all')}}>all</button>
          {uniqueCategories.map((category, i) => (
            <button className="blog__category" onClick={() => { getPosts(allPosts, category)}} key={`key${i}`}>{category}</button>
          ))}
        </div>
        <div className="blog__search">
          <label htmlFor="blogSearch" className="blog__search-label">Search:</label>
          <input type="text" className="blog__search-input" id="blogSearch"
                 onChange={(e) => searchBlog(e, allPosts)}>
          </input>
        </div>
      </div>
      <div className="indented-row row-auto">
        {filteredPosts.map(({node}, i) => (
          <div className="blog__card" key={`key${i}`}>
            <div className="blog__image" style={{backgroundImage: `url(${node.frontmatter.thumbnail})`}}></div>
            <h3 className="blog__title">{node.frontmatter.title}</h3>
            <p className="blog__excerpt">{node.excerpt}</p>
            <a className="blog__link" href={`blog/${slugify(node.frontmatter.category, {lower: true})}/${slugify(node.frontmatter.slug, {lower: true})}`}>Read More</a>
            <span className="blog__category">{node.frontmatter.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function getCategories(posts) {
  let categories = [];
  posts.filter((item) => {
    if (item.node.frontmatter.post_date) { 
      categories.push(item.node.frontmatter.category) 
      return true; 
    }
    return false;
  });

  return categories;
}

Blog.propTypes = {
  posts: PropTypes.object
}

export default Blog
