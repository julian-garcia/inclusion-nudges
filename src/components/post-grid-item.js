import React from "react"
import PropTypes from "prop-types"

const PostGridItem = ({ link, title, imageUrl }) => (
  <div className="post-grid__item">
    <a href={link} className="post-grid__title" target="_blank" rel="noopener noreferrer">
      {imageUrl && <img src={imageUrl} className="post-grid__image" alt="Feature" />}
      {!imageUrl && <div></div>}
      <span>{title}</span>
    </a>
  </div>
)

PostGridItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

export default PostGridItem
