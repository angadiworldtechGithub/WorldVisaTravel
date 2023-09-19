import React, { useState } from "react";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";
import "./Search.css";

const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));

const stateOptions = [
  { value: "state1", label: "State 1" },
  { value: "state2", label: "State 2" },
  // Add more state options
];

function Search() {
  const [sourceCountry, setSourceCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [residingState, setResidingState] = useState(null);

  const handleSearch = () => {
    console.log("Source Country:", sourceCountry?.label);
    console.log("Destination Country:", destinationCountry?.label);
    console.log("Residing State:", residingState?.label);
  };

  return (
    <div className="search-container">
      <div
        className="search1"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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

      <button className="search-button" onClick={handleSearch}>
        Go
      </button>
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
