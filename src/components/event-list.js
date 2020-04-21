import React from "react"
import PropTypes from "prop-types"

const EventList = ({events}) => {
  const filteredData = events.allMarkdownRemark.edges.filter((item) => {
    if (item.node.frontmatter.date) { return true }
    return false;
  });

  return (
    <div className="row-auto" 
         style={{gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:'1rem'}}>
      {filteredData.map(({node}, i) => (
        node.frontmatter.date &&
        <a href={node.frontmatter.link} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer" key={`key${i}`}>{node.frontmatter.title}</a>
      ))}
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.object
}

export default EventList
