import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Select from "react-select";
import { countries } from "countries-list";
import ReactCountryFlag from "react-country-flag";
import "./Search.css";

const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));

function Search() {
  const [sourceCountry, setSourceCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [residingState, setResidingState] = useState(null);

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Source Country:", sourceCountry?.label);
    console.log("Destination Country:", destinationCountry?.label);
    console.log("Residing State:", residingState?.label);
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-country-box1">
          <div className="search1">
            <Select
              className="select-box serach-box-homepage-src"
              placeholder="Select Source Country"
              options={countryOptions}
              components={{ Option: CustomOption }}
              value={sourceCountry}
              onChange={setSourceCountry}
            />

            <Select
              className="select-box serach-box-homepage-dest"
              placeholder="Select Destination Country"
              options={countryOptions}
              components={{ Option: CustomOption }}
              value={destinationCountry}
              onChange={setDestinationCountry}
            />
          </div>
        </div>

        <div className="search-country-box2">
            <button className="search-button" onClick={()=>{
              handleSearch();
              navigate("/visas");
            }}>
            GO
            </button> 
        </div>

      </div>
    </div>
  );
}

const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps} style={{ display: "flex", paddingLeft: "15px" }}>
    <span className="country-flag">{data.flag}</span>
    <span className="country-label">{label}</span>
  </div>
);

export default Search;
