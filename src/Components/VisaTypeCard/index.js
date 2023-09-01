import React, { useEffect, useState } from "react";
import Select from "react-select";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";
import ArrowRight from "../icons/ArrowRight";
import "./index.css";
function VisaCardType({ type, citizenship }) {
  const countryOptions = Object.keys(countries).map((countryCode) => ({
    value: countryCode,
    label: countries[countryCode].name,
    flag: <ReactCountryFlag countryCode={countryCode} svg />,
  }));

  //   let initialValue = { label: "United States", value: "US" };

  const [sourceCountry, setSourceCountry] = useState(null);

  useEffect(() => {
    console.log(sourceCountry);
  }, [sourceCountry]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
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
          className="select-box"
          placeholder="Select Destination Country"
          options={countryOptions}
          components={{ Option: CustomOption }}
          value={sourceCountry}
          onChange={setSourceCountry}
        />
      </div>
      <button style={{ alignSelf: "flex-end" }} className="more-info-btn">
        <span className=".more-info-btn-label me-2"> More Info</span>
        <ArrowRight />
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
export default VisaCardType;
