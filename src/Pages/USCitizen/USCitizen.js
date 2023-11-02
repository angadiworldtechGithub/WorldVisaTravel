import React from "react";
import { useLocation } from "react-router-dom";
import Canada from "../../Components/Canada/Canada";
import India from "../../Components/India/India";
import "./USCitizen.css";
import SriLanka from "../../Components/SriLanka/SriLanka";
import America from "../../Components/America/America";

function USCitizen() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const destination = searchParams.get("destination");

  console.log("COuntry", country && country);
  console.log("DESTINATION", destination && destination);

  if (country === "SriLanka") {
    console.log("SriLanka");
  } else {
    console.log("Not SriLanka");
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
      {destination === "Sri Lanka" && <SriLanka />}
      {destination === "American Samoa" && <America/>}
    </div>
  );
}

export default USCitizen;
