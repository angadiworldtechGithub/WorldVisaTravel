import React from "react";
import { useLocation } from "react-router-dom";

import "./USCitizen.css";




import Business_Us_Visa_Afghanistan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Afghanistan"
import Business_Us_Visa_Australia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Australia"
import Business_Us_Visa_Azerbaijan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Azerbaijan"
import Business_Us_Visa_Bahrain from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Bahrain"

import Business_Us_Visa_Bangladesh from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Bangladesh"
import Business_Us_Visa_Belarus from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Belarus"
import Business_Us_Visa_Bolivia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Bolivia"
import Business_Us_Visa_BurkinaFaso from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_BurkinaFaso"
import Business_Us_Visa_Burundi from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Burundi"
import Business_Us_Visa_Cambodia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Cambodia"
import Business_Us_Visa_Chad from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Chad"
import Business_Us_Visa_CentralAfricanRepublic from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_CentralAfricanRepublic"
import Business_Us_Visa_CapeVerde from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_CapeVerde"

import Business_Us_Visa_Cameroon from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Cameroon"
import Business_Us_Visa_Brazil from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Brazil"
import Business_Us_Visa_Benin from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Benin"
import Business_Us_Visa_Djibouti from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Djibouti"
import Business_Us_Visa_Eritrea from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Eritrea"
import Business_Us_Visa_Ethiopia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Ethiopia"
import Business_Us_Visa_Gabon from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Gabon"
import Business_Us_Visa_Ghana from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Ghana"
import Business_Us_Visa_Guinea from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Guinea"
import Business_Us_Visa_Gambia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Gambia"
import Business_Us_Visa_Indonesia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Indonesia"
import Business_Us_Visa_India from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_India"

import Business_Us_Visa_Iran from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Iran"
import Business_Us_Visa_Iraq from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Iraq"
import Business_Us_Visa_Jamaica from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Jamaica"
import Business_Us_Visa_China from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_China"

import Business_Us_Visa_Jordan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Jordan"
import Business_Us_Visa_Kenya from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Kenya"
import Business_Us_Visa_Kazakhstan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Kazakhstan"
import Business_Us_Visa_Laos from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Laos"
import Business_Us_Visa_Lebanon from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Lebanon"
import Business_Us_Visa_Liberia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Liberia"
import Business_Us_Visa_Libya from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Libya"
import Business_Us_Visa_Myanmar from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Myanmar"
import Business_Us_Visa_Malawi from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Malawi"
import Business_Us_Visa_Mozambique from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Mozambique"
import Business_Us_Visa_Nepal from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Nepal"
import Business_Us_Visa_Niger from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Niger"
import Business_Us_Visa_Nigeria from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Nigeria"
import Business_Us_Visa_Oman from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Oman"
import Business_Us_Visa_Russia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Russia"
import Business_Us_Visa_Rwanda from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Rwanda"

import Business_Us_Visa_Pakistan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Pakistan"
import Business_Us_Visa_PapuaNewGuinea from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_PapuaNewGuinea"
import Business_Us_Visa_Peru from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Peru"
import Business_Us_Visa_Philippines from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Philippines"
import Business_Us_Visa_Qatar from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Qatar"
import Business_Us_Visa_SaudiArabia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_SaudiArabia"

import Business_Us_Visa_SierraLeone from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_SierraLeone"
import Business_Us_Visa_SouthSudan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_SouthSudan"
import Business_Us_Visa_Suriname from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Suriname"
import Business_Us_Visa_Taiwan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Taiwan"
import Business_Us_Visa_Tajikistan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Tajikistan"
import Business_Us_Visa_Tanzania from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Tanzania"
import Business_Us_Visa_Togo from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Togo"
import Business_Us_Visa_Turkey from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Turkey"
import Business_Us_Visa_Mali from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Mali"
import Business_Us_Visa_Turkmenistan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Turkmenistan"
import Business_Us_Visa_Uganda from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Uganda"
import Business_Us_Visa_Uzbekistan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Uzbekistan"
import Business_Us_Visa_Vietnam from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Vietnam"
import Business_Us_Visa_Yemen from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Yemen"
import Business_Us_Visa_Zambia from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Zambia"
import Business_Us_Visa_Thailand from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Thailand"


function USCitizen() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const destination = searchParams.get("destination");

  console.log("COuntry", country && country);
  console.log("DESTINATION", destination && destination);


  const currentPathlocations = location.pathname;
  console.log(currentPathlocations);

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


{/* Business visas */}

      {(destination === "Afghanistan" && currentPathlocations === "/visas/business-visa/USCitizens/USCitizen") && (<Business_Us_Visa_Afghanistan />)}
      {(destination === "Australia" && currentPathlocations === "/visas/business-visa/USCitizens/USCitizen") && (<Business_Us_Visa_Australia />)}

      {(destination === "Azerbaijan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Azerbaijan />}

      {(destination === "Bahrain" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Bahrain />}
      
      {(destination === "Bangladesh" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Bangladesh />}
      
      {(destination === "Belarus" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Belarus />}
      
      {(destination === "Bolivia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Bolivia />}
      
      {(destination === "Brazil" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Brazil />}
      
      {(destination === "Burkina Faso" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_BurkinaFaso />}
      {(destination === "Burundi" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Burundi />}
      {(destination === "Cambodia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Cambodia />}
      {(destination === "Cameroon" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Cameroon/>}
      {(destination === "Cape Verde" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_CapeVerde />}
      {(destination === "CentralAfricanRepublic" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_CentralAfricanRepublic />}
      {(destination === "Chad" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Chad />}
      {(destination === "Benin" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Benin />}
      {(destination === "Djibouti" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Djibouti />}
      {(destination === "Eritrea" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Eritrea />}
      {(destination === "Ethiopia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Ethiopia />}

      
      {(destination === "Gabon" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Gabon />}
      {(destination === "Ghana" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Ghana />}
      {(destination === "Guinea" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Guinea />}
      {(destination === "Gambia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Gambia />}
      {(destination === "Indonesia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Indonesia />}
      {(destination === "India" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_India />}
      {(destination === "Iran" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Iran />}
      {(destination === "Iraq" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Iraq />}
      {(destination === "Jamaica" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Jamaica />}
      {(destination === "China" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_China />}

      {(destination === "Jordan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Jordan />}
      {(destination === "Kenya" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Kenya />}
      {(destination === "Kazakhstan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Kazakhstan />}
      {(destination === "Laos" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Laos />}
      {(destination === "Lebanon" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Lebanon />}
      {(destination === "Liberia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Liberia/>}
      {(destination === "Libya" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Libya/>}
      {(destination === "Mali" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Mali/>}
      {(destination === "Myanmar [Burma]" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Myanmar/>}
      {(destination === "Malawi" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Malawi/>}
      {(destination === "Mozambique" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Mozambique/>}
      {(destination === "Nepal" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Nepal/>}
      {(destination === "Niger" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Niger/>}
      {(destination === "Nigeria" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Nigeria/>}
      {(destination === "Oman" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Oman/>}
      {(destination === "Russia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Russia/>}
      {(destination === "Rwanda" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Rwanda/>}

      {(destination === "Pakistan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Pakistan/>}
      {(destination === "Papua New Guinea" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_PapuaNewGuinea/>}
      {(destination === "Peru" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Peru/>}
      {(destination === "Philippines" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Philippines/>}
      {(destination === "Qatar" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Qatar/>}
      {(destination === "Saudi Arabia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_SaudiArabia/>}
      {(destination === "Sierra Leone" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_SierraLeone/>}
      {(destination === "South Sudan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_SouthSudan/>}
      {(destination === "Suriname" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Suriname/>}
      {(destination === "Taiwan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Taiwan/>}
      {(destination === "Tajikistan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Tajikistan/>}
      {(destination === "Tanzania" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Tanzania/>}
      {(destination === "Thailand" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Thailand/>}
      {(destination === "Togo" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Togo/>}
      {(destination === "Turkey" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Turkey/>}
      {(destination === "Turkmenistan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Turkmenistan/>}
      {(destination === "Uganda" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Uganda/>}
      {(destination === "Uzbekistan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Uzbekistan/>}
      {(destination === "Vietnam" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Vietnam/>}
      {(destination === "Yemen" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Yemen/>}
      {(destination === "Zambia" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Zambia/>}
   










   
    </div>
  );
}

export default USCitizen;
