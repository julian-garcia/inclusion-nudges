import React from "react"
import Modal from "../components/modal"
import emailjs from 'emailjs-com'
import { countries } from 'countries-list'

function sendMail(){
  const eventDescription = document.getElementById('eventDescription');
  const message = `
    <h3>Name:</h3> ${document.getElementById('nameBooking').value}
    <hr>
    <h3>Organisation:</h3> ${document.getElementById('orgBooking').value}
    <hr>
    <h3>Participants:</h3> ${document.getElementById('participantsBooking').value}
    <hr>
    <h3>Date:</h3> ${document.getElementById('dateBooking').value}
    <hr>
    <h3>Country:</h3> ${document.getElementById('countryBooking').value}
    <hr>
    <h3>Event:</h3> ${eventDescription.value}
    `;
  const templateParams = {
    "reply_to": document.getElementById('emailBooking').value,
    "subject": `Booking - ${document.getElementById('orgBooking').value}`,
    "message_html": message
  }
  if (eventDescription.value && templateParams.reply_to) {
    emailjs.send('mailjet','inclusion_nudges', templateParams, process.env.GATSBY_EMAILJS_USERID)
    .then((response) => {
          console.log(response.status);
        }, (err) => {
          console.log(err);
        });
  }
}

const ModalBook = () => {
  const countryList = Object.values(countries).map(country => (
    {flag: country.emoji, country: country.native}
  )).sort((a, b) => {
    const countryA = a.country;
    const countryB = b.country;
    if (countryA > countryB) { return 1; }
    return -1;
  }).map(country => (
    country.flag + country.country
  ));

  return (
    <Modal modalClass="modal-booking">
      <h3 className="modal-title">Book Talks & Masterclasses</h3>
      <p>We do interactive speaking and masterclasses about the Inclusion Nudges change approach and design methodology. It’s a combination of behavioural insights and design, expertise in inclusive behaviour, culture, systems, leadership, and co-creation. We give you practical how-to designs and practical examples that empower you to make your organisation, community, and society inclusive as the default and norm.</p>
      <form className="modal-form">
        <label htmlFor="nameBooking" className="modal-form__label">Name</label><br />
        <input id="nameBooking" type="text" name="name" className="modal-form__input" required /><br />
        <div className="row-auto" style={{gap:'1rem'}}>
          <div>
            <label htmlFor="orgBooking" className="modal-form__label">Organisation</label><br />
            <input id="orgBooking" type="text" name="org" className="modal-form__input" required /><br />
          </div>
          <div>
            <label htmlFor="emailBooking" className="modal-form__label">Email</label><br />
            <input id="emailBooking" type="email" name="email" className="modal-form__input" style={{marginBottom:'0'}} required /><br />
          </div>
        </div>
        <div className="row-auto" style={{gap:'1rem'}}>
          <div>
            <label htmlFor="participantsBooking" className="modal-form__label">Number of participants</label><br />
            <input id="participantsBooking" type="text" name="org" className="modal-form__input" style={{marginBottom:'0'}} required /><br />
          </div>
          <div>
            <label htmlFor="dateBooking" className="modal-form__label">Date</label><br />
            <input id="dateBooking" type="date" name="date" className="modal-form__input" required /><br />
          </div>
        </div>
        <label htmlFor="countryBooking" className="modal-form__label">Country</label><br />
        <select name="country" id="countryBooking" className="modal-form__select">
          <option value=""></option>
          {
            countryList.map((country) => (
              <option value={country} key={country}>{country}</option>
            ))
          }
        </select><br/>
        <label htmlFor="eventDescription" className="modal-form__label">Give us a short description of your event and purpose.</label><br />
        <textarea id="eventDescription" name="message" className="modal-form__textarea" required></textarea><br />
        <button onClick={sendMail} className="modal-form__button" type="button">Send Booking Enquiry</button>
      </form>
    </Modal>
  )
}

export default ModalBook
