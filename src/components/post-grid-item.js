import React from "react"
import PropTypes from "prop-types"

const PostGridItem = ({ link, title, imageUrl }) => (
  <div className="post-grid__item">
    <a href={link} className="post-grid__title" target="_blank" rel="noopener noreferrer">
      {title}
    </a>
    {/* <a href={link} className="post-grid__link" target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} className="post-grid__image" alt="Feature" />
    </a> */}
  </div>
)

PostGridItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

export default PostGridItem
