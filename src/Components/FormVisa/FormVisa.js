import React, { useState } from "react";
import "./FormVisa.css";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
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


  const handleSubmit = () => {

    // console.log("Destination",formData.dstCountry.label)

    // console.log("CITIZEN",formData.citizen.value);

    


    if(formData?.citizen?.value === "Non-US Citizens") {
      console.log("NON US");
      navigation(`/NonUsCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
      
    } else {
      console.log("US");
      navigation(`/USCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    }

    // const citizenship = document.getElementById("citizenship").value;
    // console.log(citizenship)
    // const destination = document.getElementById("dstcountry").value;

    // switch (destination) {
    //   case "AD":
    //     if (citizenship === "US Citizens") {
    //       ("/contact"); 
    //     } else {
    //       window.location.href = "ad.html"; 
    //     }
    //     break;
    //   }
   
  };

  // const sendFormdetailsApi = () => {

  //   let payload = {
  //     name: formData.name,
  //     email: formData.email,
  //     phone: formData.phone,
  //     citizen: formData.citizen,
  //     srcCountry: formData.srcCountry.label,
  //     dstCountry: formData.dstCountry.label,
  //     Type: visaType.toUpperCase(),
  //   };
  //   axios
  //     .post(apiUrl, payload)
  //     .then((response) => {
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         citizen: null,
  //         srcCountry: null,
  //         dstCountry: null,
  //       });
  //       setIsChecked(false);
  //       alert(
  //         "Thank you for filling the form you recived the details in E-mail"
  //       );
  //       if(response.data){

  //         window.location.href = '/about';
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  console.log("harika", formData);
  // const checkhandler = () => {
  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.phone ||
  //     !formData.citizen ||
  //     !formData.srcCountry ||
  //     !formData.dstCountry
  //   ) {
  //     alert("Please fill in all the details");
  //     return;
  //   } else if (!isChecked) {
  //     alert("Please select the checkbox");
  //     return;
  //   } else {
  //     sendFormdetailsApi();
  //   }
  // };
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