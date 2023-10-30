import React, { useState } from "react";
import "./FormVisa.css";
import Select from "react-select";
import { countries } from "countries-list"; 
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";


const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));

const citizen = [
  { value: "US Citizens", label: "US Citizens" },
  { value: "Non-US Citizens", label: "Non-US Citizens" },
];

const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps} style={{ display: "flex", paddingLeft: "15px" }}>
    <span className="country-flag">{data.flag}</span>
    <span className="country-label">{label}</span>
  </div>
);

const FormVisa = ({ visaType }) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    citizen: null,
    srcCountry: null,
    dstCountry: null,
  });
}

  const handleSubmit = () => {

    if(formData?.citizen?.value === "Non-US Citizens") 
    {
      console.log("NON US");
      navigation(`/NonUsCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    }
    else
    {
      console.log("US");
      navigation(`/USCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    };

const handleAlert = ()=> {
  alert("Please Enter Source And Destination Countries")
}

return (
   <div className="Moreinfo-right-flex" id="myform">
      <div className="Country-form">
        <h3 className="Country-header">{visaType}</h3>

        <input
          style={{
            textAlign: "center",
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
            textAlign: "center",
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
            textAlign: "center",
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
          id="citizenship"
          options={citizen}
          isSearchable={false}
          placeholder="Select Citizenship"
          required
          value={formData.citizen}
          onChange={(selectedOption) => {
            setFormData({ ...formData, citizen: selectedOption });
          }}
          formatOptionLabel={({ label }) => <div>{label}</div>}
        />

        <Select
          style={{
            textAlign: "center",
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

        <Select
          style={{
            textAlign: "center",
          }}
          className="country-formdata"
          id="dstcountry"
          placeholder="Select Destination Country"
          options={countryOptions}
          value={formData.dstCountry}
          components={{ Option: CustomOption }}
          onChange={(selectedOption) => {
            setFormData({ ...formData, dstCountry: selectedOption  });
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
        {formData.srcCountry !== null && formData.dstCountry !== null  ? 
          <button
            className="country_submit"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button> :
           <button
            className="country_submit"
            type="button"
            onClick={handleAlert}
          > submit 
          </button>
          }
        </center>
      </div>
      
    </div>
    );

}
  export default FormVisa;