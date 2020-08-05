import React from "react"
import PropTypes from "prop-types"

const AmazonLinks = ({modalClass}) => (
  <div className="row-auto" style={{gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'1rem'}}>
    {modalClass === 'modal-purchase' &&
    <>
      <a href="https://www.amazon.com/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com</a>
      <a href="https://www.amazon.ca/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.ca</a>
      <a href="https://www.amazon.co.jp/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.jp</a>
      <a href="https://www.amazon.co.uk/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.uk</a>
      <a href="https://www.amazon.de/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.de</a>
      <a href="https://www.amazon.es/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.es</a>
      <a href="https://www.amazon.fr/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.fr</a>
      <a href="https://www.amazon.it/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.it</a>
    </>
    }
  </div>
)

AmazonLinks.propTypes = {
  modalClass: PropTypes.string
}

AmazonLinks.defaultProps = {
  modalClass: 'modal-purchase'
}

export default AmazonLinks
