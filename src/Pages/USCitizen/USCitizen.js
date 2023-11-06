import React from "react";
import { useLocation } from "react-router-dom";
import Canada from "../../Components/Canada/Canada";

import "./USCitizen.css";
import Afghanistan from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Afghanistan";
import Azerbaijan from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Azerbaijan";
import Australia from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Australia";
import Belarus from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Belarus";
import Brazil from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Brazil";
import Bahrain from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Bahrain";
import Bangladesh from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Bangladesh";
import Benin from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Benin";
import Bolivia from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Bolivia";
import BurkinaFaso from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_BurkinaFaso";
import Burundi from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Burundi";
import Djibouti from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Djibouti";
import Eritrea from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Eritrea";
import Ethiopia from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Ethiopia";
import Gabon from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Gabon";
import Ghana from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Ghana";
import Guinea from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Guinea";
import Gambia from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Gambia";
import Indonesia from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Indonesia";
import India from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_India";
import Iran from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Iran";
import Iraq from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Iraq";
import Jamaica from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Jamaica";
import Jordan from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Jordan";
import Kenya from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Kenya";
import Cambodia from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Cambodia";
import Kazakhstan from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Kazakhstan";
import Laos from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Laos";
import Lebanon from "../../Components/Business_visa/Business_visa_official/Business_Official_Visa_Lebanon";


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
      
      {destination === "Afghanistan" && <Afghanistan />}
      {destination === "Azerbaijan" && <Azerbaijan />}
      {destination === "Australia" && <Australia />}
      {destination === "Belarus" && <Belarus />}
      {destination === "Brazil" && <Brazil />}
      {destination === "Bahrain" && <Bahrain />}
      {destination === "Bangladesh" && <Bangladesh />}
      {destination === "Benin" && <Benin />}
      {destination === "Bolivia" && <Bolivia />}
      {destination === "Burkina Faso" && <BurkinaFaso />}
      {destination === "Burundi" && <Burundi />}
      {destination === "Djibouti" && <Djibouti />}
      {destination === "Eritrea" && <Eritrea />}
      {destination === "Ethiopia" && <Ethiopia />}
      {destination === "Gabon" && <Gabon />}
      {destination === "Ghana" && <Ghana />}
      {destination === "Guinea" && <Guinea />}
      {destination === "Gambia" && <Gambia />}
      {destination === "Indonesia" && <Indonesia />}
      {destination === "India" && <India />}
      {destination === "Iran" && <Iran />}
      {destination === "Iraq" && <Iraq />}
      {destination === "Jamaica" && <Jamaica />}

      {destination === "Jordan" && <Jordan />}
      {destination === "Kenya" && <Kenya />}
      {destination === "Cambodia" && <Cambodia />}
      {destination === "Kazakhstan" && <Kazakhstan />}
      {destination === "Laos" && <Laos />}
      {destination === "Lebanon" && <Lebanon />}









      
    </div>
  );
}

export default USCitizen;
