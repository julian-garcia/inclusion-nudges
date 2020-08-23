import React from "react"
import PropTypes from "prop-types"

const AmazonLinks = ({productCode}) => (
  <div className="row-auto" style={{gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'1rem'}}>
    <a href={`https://www.amazon.com/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com</a>
    <a href={`https://www.amazon.ca/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.ca</a>
    <a href={`https://www.amazon.co.jp/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.jp</a>
    <a href={`https://www.amazon.co.uk/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.uk</a>
    <a href={`https://www.amazon.de/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.de</a>
    <a href={`https://www.amazon.es/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.es</a>
    <a href={`https://www.amazon.fr/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.fr</a>
    <a href={`https://www.amazon.it/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.it</a>
    <a href={`https://www.amazon.com.br/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com.br</a>
    <a href={`https://www.amazon.in/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.in</a>
    <a href={`https://www.amazon.nl/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.nl</a>
    <a href={`https://www.amazon.com.mx/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com.mx</a>
    <a href={`https://www.amazon.com.au/Inclusion-Nudges-Guidebook-how-bias/dp/${productCode}`} className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com.au</a>
  </div>
)

AmazonLinks.propTypes = {
  productCode: PropTypes.string
}

AmazonLinks.defaultProps = {
  productCode: 'modal-purchase'
}

export default AmazonLinks
