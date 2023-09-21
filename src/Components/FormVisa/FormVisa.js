import React, { useState } from "react";
import "./FormVisa.css";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";


const axios = require("axios");
const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));



const FormVisa = ({ visaType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    citizen: "",
    srcCountry: "",
    dstCountry: "",
  });

  const sendFormdetailsApi = () => {
    const apiUrl = "http://localhost:8005/pdf-mailer";
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const checkhandler = () => {
    if (
      !formData?.name ||
      !formData?.email ||
      !formData?.phone ||
      !formData?.citizen ||
      !formData?.srcCountry ||
      !formData?.dstCountry
    ) {
      alert("please fill all the details");
      return;
    } else {
      sendFormdetailsApi();
    }
  };

  const [chooseCitizenship,setChooseCitizenship] = useState(null);
  const [sourceCountry, setSourceCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [residingState, setResidingState] = useState(null);

  const handleSearch = () => {
    console.log("Choose Citizenship:", chooseCitizenship?.label);
    console.log("Source Country:", sourceCountry?.label);
    console.log("Destination Country:", destinationCountry?.label);
    console.log("Residing State:", residingState?.label);
  };


  return (
    <div className="Moreinfo-right-flex">
      <div className="Country-form">
        <h3 className="Country-header">{visaType}</h3>
  
          <input style={{paddingLeft:"140px",paddingBottom:"8px",paddingTop:"8px"}}
            className="country-formdata"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, name: e.target.value }));
            }}
          />
    
          <input style={{paddingLeft:"110px",paddingBottom:"8px",paddingTop:"8px"}}
            className="country-formdata"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email Address"
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, email: e.target.value }));
            }}
/>
        
          <input style={{paddingLeft:"110px",paddingBottom:"8px",paddingTop:"8px"}}
            className="country-formdata"
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            required
            placeholder="Phone Number"
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, phone: e.target.value }));
            }}
          />
        
       
          <select   style={{paddingLeft:"110px",paddingBottom:"8px",paddingTop:"8px"}}
           className="country-formdata"
           required
           placeholder="Select Citizenship">
              <option>US Citizens</option>
              <option>NON-Us Citizens</option>
          </select>
       
        <Select
        className="country-formdata"
        placeholder="Select Source Country"
        options={countryOptions}
        value={sourceCountry}
        onChange={setSourceCountry}
      />
      

      <Select
        className="country-formdata"
        placeholder="Select Destination Country"
        options={countryOptions}
        value={destinationCountry}
        onChange={setDestinationCountry}
      />
      
    

  {/*  <div className="country-formdata">
          <select
            className="country-input"
            id="citizenship"
            name="citizenship"
            options={countryOptions}
            value={chooseCitizenship}
            placeholder="Choose citizenship"
            required
            onChange={(e) => {
              setChooseCitizenship((pre) => ({ ...pre, citizen: e.target.value }));
            }}
          >
          </select>
         </div>

        <div className="country-formdata">
          <select
            className="country-input"
            id="country"
            name="country"
            options={countryOptions}
            value={destinationCountry}
            placeholder="Select Your Country"
            required
            onChange={(e) => {
              setSourceCountry((pre) => ({ ...pre, srcCountry: e.target.value }));
            }}
          >
          </select>
        </div>

        <div className="country-formdata">
          <select
            className="country-input"
            id="destinationCountry"
            name="destinationCountry"
            options={countryOptions}
            value={chooseCitizenship}
            required
            onChange={(e) => {
              setDestinationCountry((pre) => ({ ...pre, dstCountry: e.target.value }));
            }}
          >

          </select>
          </div>*/}
        <label className="country_label">
          <input type="checkbox" className="checkbox" required />I authorize
          world visa travel and its representative to contact me with updates
          and notifications via Email, SMS, WhatsApp,and call.
        </label>
        <center>
          <button
            className="country_submit"
            type="button"
            onClick={checkhandler}
          >
            Submit
          </button>
        </center>
      </div>
      </div>
  );
};

export default FormVisa;
