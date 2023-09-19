import React, { useState } from "react";
const axios = require("axios");

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
  return (
    <div className="Moreinfo-right-flex">
      <div className="Country-form">
        <h3 className="Country-header">{visaType}</h3>
        <div className="country-formdata">
          <input
            className="country-input"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, name: e.target.value }));
            }}
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
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, email: e.target.value }));
            }}
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
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, phone: e.target.value }));
            }}
          />
        </div>

        <div className="country-formdata">
          <select
            className="country-input"
            id="citizenship"
            name="citizenship"
            placeholder="Choose citizenship"
            required
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, citizen: e.target.value }));
            }}
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
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, srcCountry: e.target.value }));
            }}
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
            onChange={(e) => {
              setFormData((pre) => ({ ...pre, dstCountry: e.target.value }));
            }}
          >
            <option value="">Select Your Destination Country</option>
          </select>
        </div>
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
