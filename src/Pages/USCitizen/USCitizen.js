import React from "react";
import { useLocation } from "react-router-dom";
import Canada from "../../Components/Canada/Canada";
import India from "../../Components/India/India";
import "./USCitizen.css";

function USCitizen() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const destination = searchParams.get("destination");

  console.log("COuntry", country && country);
  console.log("DESTINATION", destination && destination);

  if (country === "Canada") {
    console.log("Canada");
  } else {
    console.log("Not canada");
  }

  return (
    <div className="Us-citizen">
      <center>
        <h2 className="Us-citizen-Header">US Citizens</h2>
      </center>
      <center>
        <h3 className="Us-citizen-country">{destination && destination}</h3>
      </center>
      {destination === "Canada" && <Canada />}
      {destination === "India" && <India />}
    </div>
  );
}

export default USCitizen;
