import React from "react"
import PropTypes from "prop-types"

const AmazonLinks = ({productCode}) => (
  <div className="row-auto" style={{gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'1rem'}}>
    <a href={`https://www.amazon.com/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com</a>
    <a href={`https://www.amazon.ca/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.ca</a>
    <a href={`https://www.amazon.co.jp/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.jp</a>
    <a href={`https://www.amazon.co.uk/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.uk</a>
    <a href={`https://www.amazon.de/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.de</a>
    <a href={`https://www.amazon.es/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.es</a>
    <a href={`https://www.amazon.fr/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.fr</a>
    <a href={`https://www.amazon.it/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.it</a>
    {productCode==='B086PMRGNY' &&
    <a href={`https://www.amazon.com.au/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com.au</a>}
  </div>
)

AmazonLinks.propTypes = {
  productCode: PropTypes.string
}

AmazonLinks.defaultProps = {
  productCode: 'modal-purchase'
}

export default AmazonLinks
