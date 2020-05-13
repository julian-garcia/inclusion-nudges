import React from "react"
import Modal from "../components/modal"

const ModalPurchase = () => (
  <Modal modalClass='modal-purchase'>
    <div style={{textAlign:'center'}}>
      <h3 className="modal-title">Purchase your Guidebook</h3>
      <p>The book is available for sale through Amazon. Select the Amazon link below for your location or the one closest to you.</p>
      <p>Note: Due to the Corona crisis lock down, the book is only available on Amazon.com in the US – please select one of the other sites for outside the US.</p>
      <p>If you experience that none of the Amazon sites ship to your country, please write us on <a href="mailto:contact@inclusion-nudges.org" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold'}}>contact@inclusion-nudges.org</a> with your address, telephone number and number of books. We will send you an invoice via Pay Pal and ship the book after payment is received. The fee will be the price of the book on Amazon, packaging, and shipping cost.</p>
      <div className="row-auto" style={{gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'1rem'}}>
        <a href="https://www.amazon.com/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.com</a>
        <a href="https://www.amazon.ca/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.ca</a>
        <a href="https://www.amazon.co.jp/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.jp</a>
        <a href="https://www.amazon.co.uk/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.co.uk</a>
        <a href="https://www.amazon.de/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.de</a>
        <a href="https://www.amazon.es/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.es</a>
        <a href="https://www.amazon.fr/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.fr</a>
        <a href="https://www.amazon.it/Inclusion-Nudges-Guidebook-how-bias/dp/B086PMRGNY" className="modal-form__button" style={{margin:'0'}} target="_blank" rel="noopener noreferrer">amazon.it</a>
      </div>
      <br/>
    </div>
  </Modal>
)

export default ModalPurchase
