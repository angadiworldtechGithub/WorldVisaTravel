import React from "react";
import { useLocation } from "react-router-dom";
import Canada from "../../Components/Canada/Canada";
import "./USCitizen.css";
import SriLanka from "../../Components/SriLanka/SriLanka";
import Afghanistan from "../../Components/Tourist_visa/Tourist_non_us_visa/Afghanistan";

function USCitizen() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const destination = searchParams.get("destination");

  const currentPathlocations = location.pathname;
  console.log(currentPathlocations)

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
      {(destination === "Afghanistan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Afghanistan />)}
      {destination === "Canada" && <Canada />}
      
      {destination === "Sri Lanka" && <SriLanka />}
    </div>
  );
}

export default USCitizen;
