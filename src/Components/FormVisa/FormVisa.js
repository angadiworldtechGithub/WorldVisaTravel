import React, { useState } from "react";
import "./FormVisa.css";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";
import axios from "axios";

const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));

const FormVisa = ({ visaType }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    citizen: null,
    srcCountry: null,
    dstCountry: null,
  });

  const sendFormdetailsApi = () => {
    const apiUrl = "https://weak-blue-bat-tutu.cyclic.cloud/pdf-mailer";
    let payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      citizen: formData.citizen,
      srcCountry: formData.srcCountry,
      dstCountry: formData.dstCountry,
    };
    axios
      .post(apiUrl, payload)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("Ankit", formData);
  const checkhandler = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.citizen ||
      !formData.srcCountry ||
      !formData.dstCountry
    ) {
      alert("Please fill in all the details");
      return;
    } else if (!isChecked) {
      alert("Please select the checkbox");
      return;
    } else {
      sendFormdetailsApi();
    }
  };

  return (
    <div className="Moreinfo-right-flex">
      <div className="Country-form">
        <h3 className="Country-header">{visaType}</h3>

        <input
          style={{
            paddingLeft: "140px",
            paddingBottom: "8px",
            paddingTop: "8px",
          }}
          className="country-formdata"
          type="text"
          id="name"
          name="name"
          required
          placeholder="Name"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <input
          style={{
            paddingLeft: "110px",
            paddingBottom: "8px",
            paddingTop: "8px",
          }}
          className="country-formdata"
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email Address"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />

        <input
          style={{
            paddingLeft: "110px",
            paddingBottom: "8px",
            paddingTop: "8px",
          }}
          className="country-formdata"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          placeholder="Phone Number"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />

        <Select
          className="country-formdata"
          placeholder="Choose Citizenship"
          options={countryOptions}
          value={formData.citizen}
          onChange={(selectedOption) => {
            setFormData({ ...formData, citizen: selectedOption });
          }}
        />

  
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
          value={formData.srcCountry}
          onChange={(selectedOption) => {
            setFormData({ ...formData, srcCountry: selectedOption });
          }}
        />
        <Select
          className="country-formdata"
          placeholder="Select Destination Country"
          options={countryOptions}
          value={formData?.dstCountry}
          onChange={(selectedOption) => {
            setFormData({
              ...formData,
              dstCountry: selectedOption,
            });
          }}
        />

        <label className="country_label">
          <input
            type="checkbox"
            className="checkbox"
            required
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          I authorize world visa travel and its representative to contact me
          with updates and notifications via Email, SMS, WhatsApp, and call.
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