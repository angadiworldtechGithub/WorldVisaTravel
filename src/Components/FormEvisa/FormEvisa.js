import React, { useState } from "react";
import "./FormEvisa.css";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";
import axios from "axios";



const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));



const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps} style={{ display: "flex", paddingLeft: "15px" }}>
    <span className="country-flag">{data.flag}</span>
    <span className="country-label">{label}</span>
  </div>
);

const FormEvisa = ({ visaType }) => {
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
      srcCountry: formData.srcCountry.label,
      dstCountry: formData.dstCountry.label,
      Type: visaType.toUpperCase(),
    };
    axios
      .post(apiUrl, payload)
      .then((response) => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          citizen: null,
          srcCountry: null,
          dstCountry: null,
        });
        setIsChecked(false);
        alert(
          "Thank you for filling the form you recived the details in E-mail"
        );
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
            textAlign:"center",
           /* paddingLeft: "140px",
            paddingBottom: "8px",
            paddingTop: "8px",*/
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
            textAlign:"center",
           /* paddingLeft: "100px",
            paddingBottom: "8px",
            paddingTop: "8px",*/
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
            textAlign:"center",
            /*paddingLeft: "110px",
            paddingBottom: "8px",
            paddingTop: "8px",*/
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

        <select
        style={{
          paddingLeft: "100px",
          paddingBottom: "8px",
          paddingTop: "8px",
        }}
        className="country-formdata"
        required
        value={formData.citizen}
        onChange={(selectedOption) => {
          setFormData({ ...formData, citizen: selectedOption.target.value });
        }}
      >
        <option value="">Select Citizenship</option>
        <option value="us Citizens">US Citizens</option>
        <option value="non-us citizens">Non-US Citizens</option>
      </select>

   

        <Select
        style={{
          textAlign:"center",
         /* paddingLeft: "110px",
          paddingBottom: "8px",
          paddingTop: "8px",*/
        }}
          className="country-formdata"
          placeholder="Select Source Country"
          options={countryOptions}
          value={formData.srcCountry}
          components={{ Option: CustomOption }}
          onChange={(selectedOption) => {
            setFormData({ ...formData, srcCountry: selectedOption });
          }}
        />


        <select
        style={{
          paddingLeft: "60px",
          paddingBottom: "8px",
          paddingTop: "8px",
        }}
        className="country-formdata"
        required
        value={formData.citizen}
        onChange={(selectedOption) => {
          setFormData({ ...formData, citizen: selectedOption.target.value });
        }}
      >
        <option value="">Select Destination Country </option>
        <option value="Argentina"><img src="assets/flag/flag.png" width="20px" height="20px"></img>Argentina</option>
        <option value="Australian">Australian</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Benin">Benin</option>
        <option value="Brazilian">Brazilian</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Canadian">Canadian</option>
        <option value="Egypt">Egypt</option>
        <option value="India">India</option>
        <option value="Kenyan">Kenyan</option>
        <option value="Myanmar">Myanmar</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Oman">Oman</option>
        <option value="Russian">Russian</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Saudi">Saudi</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Turkish">Turkish</option>
        <option value="Uganda">Uganda</option>
      </select>


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

export default FormEvisa;
