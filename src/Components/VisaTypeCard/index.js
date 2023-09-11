import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { countries } from "countries-list";
import ReactCountryFlag from "react-country-flag";
import ArrowRight from "../icons/ArrowRight";
import "./index.css";

function VisaCardType({ type, citizenship, bg }) {
  const countryOptions = Object.keys(countries).map((countryCode) => ({
    value: countryCode,
    label: countries[countryCode].name,
    flag: <ReactCountryFlag countryCode={countryCode} svg />,
  }));

  const [sourceCountry, setSourceCountry] = useState(null);
  const [citizenshipType, setCitizenShipType] = useState("");
  const citizenshipOptions = [
    { value: "us", label: "US Citizen" },
    { value: "non-us", label: "Non-US Citizen" },
  ];

  useEffect(() => {
    console.log(sourceCountry);
  }, [sourceCountry]);

  // Define the route for the "More Info" page based on the type
  const moreInfoRoute = `/moreinfo/${type.toLowerCase()}`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        border: "1px solid #ddd",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        paddingBottom: "20px",
        borderRadius: "20px",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center text-capitalize"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "transparent",
          backgroundPosition: "right bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          minHeight: "200px",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <h2
          className="text-center text-light"
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "underline",
          }}
        >
          {`${type} Visa ${
            citizenshipType ? " for " + citizenshipType.label + "s" : ""
          }`}
        </h2>
      </div>

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
          placeholder="Choose citizenship"
          options={citizenshipOptions}
          value={citizenshipType}
          onChange={setCitizenShipType}
        />
        <Select
          className="select-box"
          placeholder="Select Destination Country"
          options={countryOptions}
          components={{ Option: CustomOption }}
          value={sourceCountry}
          onChange={setSourceCountry}
        />
      </div>

      {/* Use the dynamic route for "More Info" */}
      <button style={{ alignSelf: "flex-end" }} className="more-info-btn">
        <Link to={moreInfoRoute}>
          <span className=".more-info-btn-label me-2"> More Info</span>
        </Link>
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
