import "./FormEvisa.css";
import React,{useState} from "react";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";



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

const DistOption = ({ innerProps, label, imagePath }) => (
  <div {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={imagePath}
      alt={label}
      style={{ marginRight: '10px', width: '20px', height: '18px' }}
    />
    {label}
  </div>
);

const options = [
  { value: 'Argentina', label: 'Argentina', imagePath: '/assets/flag/flag.png' },
  { value: 'Australian', label: 'Australian', imagePath: '/assets/flag/australia.png' },
  { value: 'Azerbaijan', label: 'Azerbaijan', imagePath: '/assets/flag/azerbaijan.png' },
  { value: 'Benin', label: 'Benin', imagePath: '/assets/flag/benin.png' },
  { value: 'Brazilian', label: 'Brazilian', imagePath: '/assets/flag/brazil.png' },
  { value: 'Cambodia', label: 'Cambodia', imagePath: '/assets/flag/cambodia.png' },
  { value: 'Canadian', label: 'Canadian', imagePath: '/assets/flag/canada.png' },
  { value: 'Ethiopia', label: 'Ethiopia', imagePath: '/assets/flag/Ethiopia.png' },
  { value: 'India', label: 'India', imagePath: '/assets/flag/india.png' },
  { value: 'North Korea', label: 'North Korea', imagePath: '/assets/flag/north-korea.png' },
  { value: 'Kuwait', label: 'Kuwait', imagePath: '/assets/flag/kuwait.png' },
  { value: 'Kyrgyzstan', label: 'Kyrgyzstan', imagePath: '/assets/flag/Kyrgyzstan.png' },
  { value: 'Kenyan', label: 'Kenyan', imagePath: '/assets/flag/kenya.png' },
  { value: 'Laos', label: 'Laos', imagePath: '/assets/flag/Laos.png' },
  { value: 'Myanmar', label: 'Myanmar', imagePath: '/assets/flag/myanmar.png' },
  { value: 'Mozambique', label: 'Mozambique', imagePath: '/assets/flag/Mozambique.png' },
  { value: 'New Zealand', label: 'New Zealand', imagePath: '/assets/flag/new-zealand.png' },
  { value: 'Oman', label: 'Oman', imagePath: '/assets/flag/oman.png' },
  { value: 'Russian', label: 'Russian', imagePath: '/assets/flag/russia.png' },
  { value: 'Rwanda', label: 'Rwanda', imagePath: '/assets/flag/rwanda.png' },
  { value: 'Saudi', label: 'Saudi', imagePath: '/assets/flag/saudi-arabia.png' },
  { value: 'Sri Lankan', label: 'Sri Lankan', imagePath: '/assets/flag/sri-lanka.png' },
  { value: 'Tanzania', label: 'Tanzania', imagePath: '/assets/flag/tanzania.png' },
  { value: 'Turkish', label: 'Turkish', imagePath: '/assets/flag/Turkey.png' },
  { value: 'Thailand', label: 'Thailand', imagePath: '/assets/flag/Thailand.png' },
  { value: 'uganda', label: 'uganda', imagePath: '/assets/flag/uganda.png' },
  { value: 'united arab emirates', label: 'united arab emirates', imagePath: '/assets/flag/united-arab-emirates.png' },
  { value: 'Zambia', label: 'Zambia', imagePath: '/assets/flag/Zambia.png' },

];


const citizen = [
  { value: 'US Citizens', label: 'US Citizens'},
  { value: 'Non-US Citizens', label: 'Non-US Citizens' },
]


const FormEvisa = ({ visaType }) => {
   // Access the current path
   const currentPath = location.pathname;
   console.log(currentPath)
   
  const navigation = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    citizen: null,
    srcCountry: null,
    dstCountry: null,
  });

  const handleSubmit = () => {
  
    if(formData?.citizen?.value === "Non-US Citizens" && currentPath === '/visas/e-visa/Business_e-visa' ) {
      console.log("NONUS");
      navigation(`/visas/e-visa/Business_e-visa/${formData?.citizen.value.split(" ").join("")}/NonUSCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    }
  else  if(formData?.citizen?.value === "Non-US Citizens" && currentPath === '/visas/e-visa/Tourist_e-visa' ) {
      console.log("NON US");
      navigation(`/visas/e-visa/Tourist_e-visa/${formData?.citizen.value.split(" ").join("")}/NonUSCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    }
    else if(formData?.citizen?.value === "US Citizens" && currentPath === '/visas/e-visa/Business_e-visa' ) {
      console.log("US");
      navigation(`/visas/e-visa/Business_e-visa/${formData?.citizen.value.split(" ").join("")}/USCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    }
  else if(formData?.citizen?.value === "US Citizens" && currentPath === '/visas/e-visa/Tourist_e-visa' ) {
      console.log("US");
      navigation(`/visas/e-visa/Tourist_e-visa/${formData?.citizen.value.split(" ").join("")}/USCitizen?country=${formData?.srcCountry?.label}&destination=${formData?.dstCountry?.label}`)
    }
   
  };

  console.log("Harika", formData);

  const handleAlert = ()=> {
    alert("Please Fill All Details.")
  }

  return (
  
    <div className="Moreinfo-right-flex">
      <div className="Country-form">
        <h3 className="Country-header">{visaType}</h3>
      
        <input
          style={{
            textAlign:"center",
          }}
          className="country-formdata"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <input
          style={{
            textAlign:"center",
          
          }}
          className="country-formdata"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />

        <input
          style={{
            textAlign:"center",
            
          }}
          className="country-formdata"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />

<div className="input_container">

        <Select
        className="country-formdata"
        id="citizenship"
        options={citizen}
        isSearchable={false} 
        placeholder="Select Citizenship"
        value={formData.citizen}
        onChange={(selectedOption) => {
          setFormData({ ...formData, citizen: selectedOption });
         }}
        formatOptionLabel={({ label}) => (
          <div>
            {label}
          </div>
        )}
      />

        <Select
        style={{
          textAlign:"center",
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
        </div>
     
    <Select style={{marginBottom:"20px"}}
    options={options}
    isSearchable={false} 
    placeholder="Select Destination Country"
    menuPlacement="auto"
    menuPosition="fixed"
    formatOptionLabel={({ label, imagePath }) => (
      <div style={{ display: 'flex', alignItems: 'start'}}>
        <img src={imagePath} alt={label} 
        style={{ marginRight: '10px', width: '20px', height: '18px' }} />
        {label}
      </div>
    )}
    onChange={(selectedOption) => {
            setFormData({ ...formData, dstCountry: selectedOption });
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
          I authorize WVT/World visa travel and its representative to contact me
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
};

export default FormEvisa;