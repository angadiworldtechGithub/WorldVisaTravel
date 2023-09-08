import React from 'react'
import "./Moreinfo.css"

function Moreinfo() {
  return (
    <div>
    <div className="container">
      <div className="left-flex">
        <h3 className="header">Tourist Visa</h3>
        <p className="description">
          A Tourist visa allows travelers to visit a foreign country for leisure, sightseeing, 
          and recreational purposes, typically for a limited duration.
        </p>
        <img className="more_image" src="assets/Touristvisa.png" alt="Tourist Visa" width="90%"/>
      </div>

      <div className="right-flex" w>
        <h3 className="header">Tourist Visa</h3>
        <div className="form">
        <div className="country-formdata">
          <input
            className="country-input"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="country-formdata">
          <input
            className="country-input"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email Address"
          />
        </div>
        <div className="country-formdata">
          <input
            className="country-input"
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            required
            placeholder="Phone Number"
          />
        </div>

        <div className="country-formdata">
          <select
            className="country-input"
            id="citizenship"
            name="citizenship"
            placeholder="Choose citizenship"
            required
          >
            <option value="">Choose citizenship</option>
          </select>
        </div>

        <div className="country-formdata">
          <select
            className="country-input"
            id="country"
            name="country"
            placeholder="Select Your Country"
            required
          >
            <option value="">Select Your Country</option>
  </select>
         
        </div>

        <div className="country-formdata">
          <select
            className="country-input"
            id="destinationCountry"
            name="destinationCountry"
            required
          >
            <option value="">Select Your Destination Country</option>
          </select>
        </div>
        <label className="country_label">
          <input type="checkbox" className="checkbox" required />I authorize
          Finsafe and its representative to contact me with updates and
          notifications via Email, SMS, WhatsApp,and call.
        </label>
        <center>
          <button className="country_submit" type="button">
            Submit
          </button>
        </center>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Moreinfo