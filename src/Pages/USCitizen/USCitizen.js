import React from "react";
import { useLocation } from "react-router-dom";

import "./USCitizen.css";

import Official_Us_Afghanistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Afghanistan";
import Official_Us_UnitedArabEmirates from "../../Components/Official_visa/Official_us_visa/Official_Us_UnitedArabEmirates";

import Official_Us_Argentina from "../../Components/Official_visa/Official_us_visa/Official_Us_Argentina";
import Official_Us_Angola from "../../Components/Official_visa/Official_us_visa/Official_Us_Angola";
import Official_Us_Armenia from "../../Components/Official_visa/Official_us_visa/Official_Us_Armenia";
import Official_Us_Azerbaijan from "../../Components/Official_visa/Official_us_visa/Official_Us_Azerbaijan";
import Official_Us_Algeria from "../../Components/Official_visa/Official_us_visa/Official_Us_Algeria";
import Official_Us_AmericanSamoa from "../../Components/Official_visa/Official_us_visa/Official_Us_AmericanSamoa";
import Official_Us_Australia from "../../Components/Official_visa/Official_us_visa/Official_Us_Australia";
import Official_Us_Belarus from "../../Components/Official_visa/Official_us_visa/Official_Us_Belarus";
import Official_Us_Brunei from "../../Components/Official_visa/Official_us_visa/Official_Us_Brunei";
import Official_Us_Bahrain from "../../Components/Official_visa/Official_us_visa/Official_Us_Bahrain";
import Official_Us_Bulgaria from "../../Components/Official_visa/Official_us_visa/Official_Us_Bulgaria";
import Official_Us_Bangladesh from "../../Components/Official_visa/Official_us_visa/Official_Us_Bangladesh";
import Official_Us_Bolivia from "../../Components/Official_visa/Official_us_visa/Official_Us_Bolivia";
import Official_Us_Brazil from "../../Components/Official_visa/Official_us_visa/Official_Us_Brazil";
import Official_Us_BurkinaFaso from "../../Components/Official_visa/Official_us_visa/Official_Us_BurkinaFaso";
import Official_Us_Benin from "../../Components/Official_visa/Official_us_visa/Official_Us_Benin";
import Official_Us_Burundi from "../../Components/Official_visa/Official_us_visa/Official_Us_Burundi";
import Official_Us_China from "../../Components/Official_visa/Official_us_visa/Official_Us_China";
import Official_Us_Cambodia from "../../Components/Official_visa/Official_us_visa/Official_Us_Cambodia";
import Official_Us_Chile from "../../Components/Official_visa/Official_us_visa/Official_Us_Chile";
import Official_Us_CapeVerde from "../../Components/Official_visa/Official_us_visa/Official_Us_CapeVerde";
import Official_Us_DemocraticRepCongo from "../../Components/Official_visa/Official_us_visa/Official_Us_DemocraticRepCongo";
import Official_Us_IvoryCoast from "../../Components/Official_visa/Official_us_visa/Official_Us_IvoryCoast";
import Official_Us_Congo from "../../Components/Official_visa/Official_us_visa/Official_Us_Congo";
import Official_Us_CentralAfricanRepublic from "../../Components/Official_visa/Official_us_visa/Official_Us_CentralAfricanRepublic";
import Official_Us_Cameroon from "../../Components/Official_visa/Official_us_visa/Official_Us_Cameroon";
import Official_Us_Djibouti from "../../Components/Official_visa/Official_us_visa/Official_Us_Djibouti";
import Official_Us_DominicanRepublic from "../../Components/Official_visa/Official_us_visa/Official_Us_DominicanRepublic";
import Official_Us_Ecuador from "../../Components/Official_visa/Official_us_visa/Official_Us_Ecuador";
import Official_Us_Eritrea from "../../Components/Official_visa/Official_us_visa/Official_Us_Eritrea";
import Official_Us_Egypt from "../../Components/Official_visa/Official_us_visa/Official_Us_Egypt";
import Official_Us_Ethiopia from "../../Components/Official_visa/Official_us_visa/Official_Us_Ethiopia";
import Official_Us_France from "../../Components/Official_visa/Official_us_visa/Official_Us_France";
import Official_Us_Gabon from "../../Components/Official_visa/Official_us_visa/Official_Us_Gabon";
import Official_Us_Ghana from "../../Components/Official_visa/Official_us_visa/Official_Us_Ghana";
import Official_Us_Gambia from "../../Components/Official_visa/Official_us_visa/Official_Us_Gambia";
import Official_Us_Guinea from "../../Components/Official_visa/Official_us_visa/Official_Us_Guinea";
import Official_Us_Greece from "../../Components/Official_visa/Official_us_visa/Official_Us_Greece";
import Official_Us_GuineaBissau from "../../Components/Official_visa/Official_us_visa/Official_Us_GuineaBissau";
import Official_Us_Haiti from "../../Components/Official_visa/Official_us_visa/Official_Us_Haiti";
import Official_Us_Israel from "../../Components/Official_visa/Official_us_visa/Official_Us_Israel";
import Official_Us_India from "../../Components/Official_visa/Official_us_visa/Official_Us_India";
import Official_Us_Indonesia from "../../Components/Official_visa/Official_us_visa/Official_Us_Indonesia";
import Official_Us_Iraq from "../../Components/Official_visa/Official_us_visa/Official_Us_Iraq";
import Official_Us_Japan from "../../Components/Official_visa/Official_us_visa/Official_Us_Japan";
import Official_Us_Jordon from "../../Components/Official_visa/Official_us_visa/Official_Us_Jordon";
import Official_Us_Jamaica from "../../Components/Official_visa/Official_us_visa/Official_Us_Jamaica";
import Official_Us_Kazakhstan from "../../Components/Official_visa/Official_us_visa/Official_Us_Kazakhstan";
import Official_Us_Kenya from "../../Components/Official_visa/Official_us_visa/Official_Us_Kenya";
import Official_Us_KoreaSouth from "../../Components/Official_visa/Official_us_visa/Official_Us_KoreaSouth";
import Official_Us_Kuwait from "../../Components/Official_visa/Official_us_visa/Official_Us_Kuwait";
import Official_Us_Kyrgyzstan from "../../Components/Official_visa/Official_us_visa/Official_Us_Kyrgyzstan";
import Official_Us_Laos from "../../Components/Official_visa/Official_us_visa/Official_Us_Laos";
import Official_Us_Liberia from "../../Components/Official_visa/Official_us_visa/Official_Us_Liberia";
import Official_Us_Libya from "../../Components/Official_visa/Official_us_visa/Official_Us_Libya";
import Official_Us_Lebanon from "../../Components/Official_visa/Official_us_visa/Official_Us_Lebanon";
import Official_Us_Madagascar from "../../Components/Official_visa/Official_us_visa/Official_Us_Madagascar";
import Official_Us_Malawi from "../../Components/Official_visa/Official_us_visa/Official_Us_Malawi";
import Official_Us_Mali from "../../Components/Official_visa/Official_us_visa/Official_Us_Mali";
import Official_Us_Mauritania from "../../Components/Official_visa/Official_us_visa/Official_Us_Mauritania";
import Official_Us_Mongolia from "../../Components/Official_visa/Official_us_visa/Official_Us_Mongolia";
import Official_Us_Mozambique from "../../Components/Official_visa/Official_us_visa/Official_Us_Mozambique";
import Official_Us_Myanmar from "../../Components/Official_visa/Official_us_visa/Official_Us_Myanmar";
import Official_Us_Nigeria from "../../Components/Official_visa/Official_us_visa/Official_Us_Nigeria";
import Official_Us_Namibia from "../../Components/Official_visa/Official_us_visa/Official_Us_Namibia";
import Official_Us_Nepal from "../../Components/Official_visa/Official_us_visa/Official_Us_Nepal";
import Official_Us_Niger from "../../Components/Official_visa/Official_us_visa/Official_Us_Niger";
import Official_Us_Oman from "../../Components/Official_visa/Official_us_visa/Official_Us_Oman";
import Official_Us_Philippines from "../../Components/Official_visa/Official_us_visa/Official_Us_Philippines";
import Official_Us_Peru from "../../Components/Official_visa/Official_us_visa/Official_Us_Peru";
import Official_Us_Paraguay from "../../Components/Official_visa/Official_us_visa/Official_Us_Paraguay";
import Official_Us_Pakistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Pakistan";
import Official_Us_Spain from "../../Components/Official_visa/Official_us_visa/Official_Us_Spain";
import Official_Us_Suriname from "../../Components/Official_visa/Official_us_visa/Official_Us_Suriname";
import Official_Us_SouthSudan from "../../Components/Official_visa/Official_us_visa/Official_Us_SouthSudan";
import Official_Us_SierraLeone from "../../Components/Official_visa/Official_us_visa/Official_Us_SierraLeone";
import Official_Us_Sudan from "../../Components/Official_visa/Official_us_visa/Official_Us_Sudan";
import Official_Us_SouthAfrica from "../../Components/Official_visa/Official_us_visa/Official_Us_SouthAfrica";
import Official_Us_SaudiArabia from "../../Components/Official_visa/Official_us_visa/Official_Us_SaudiArabia";
import Official_Us_Qatar from "../../Components/Official_visa/Official_us_visa/Official_Us_Qatar";
import Official_Us_Russia from "../../Components/Official_visa/Official_us_visa/Official_Us_Russia";
import Official_Us_SriLanka from "../../Components/Official_visa/Official_us_visa/Official_Us_SriLanka";
import Official_Us_Tajikistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Tajikistan";
import Official_Us_Tanzania from "../../Components/Official_visa/Official_us_visa/Official_Us_Tanzania";
import Official_Us_Thailand from "../../Components/Official_visa/Official_us_visa/Official_Us_Thailand";
import Official_Us_Turkey from "../../Components/Official_visa/Official_us_visa/Official_Us_Turkey";
import Official_Us_Turkmenistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Turkmenistan";
import Official_Us_Togo from "../../Components/Official_visa/Official_us_visa/Official_Us_Togo";
import Official_Us_TrinidadAndTobago from "../../Components/Official_visa/Official_us_visa/Official_Us_TrinidadAndTobago";
import Official_Us_Uruguay from "../../Components/Official_visa/Official_us_visa/Official_Us_Uruguay";
import Official_Us_Uzbekistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Uzbekistan";
import Official_Us_Vietnam from "../../Components/Official_visa/Official_us_visa/Official_Us_Vietnam";
import Official_Us_Yemen from "../../Components/Official_visa/Official_us_visa/Official_Us_Yemen";
import Official_Us_Zambia from "../../Components/Official_visa/Official_us_visa/Official_Us_Zambia";
import Official_Us_Zimbabwe from "../../Components/Official_visa/Official_us_visa/Official_Us_Zimbabwe";

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
     

{/* Official Visas */}
      {(destination === "Afghanistan"  && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Afghanistan />) }
      {(destination === "United Arab Emirates"  && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_UnitedArabEmirates />)}
      {(destination === "American Samoa" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_AmericanSamoa />)}
      {(destination === "Argentina" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Argentina />)}
      {(destination === "Angola" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Angola />)}
      {(destination === "Armenia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&& (<Official_Us_Armenia />)}
      {(destination === "Azerbaijan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &(<Official_Us_Azerbaijan />)}
      {(destination === "Algeria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Algeria />)}
      {(destination === "Australia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Australia />)}
      {(destination === "Belarus" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Belarus />)}
      {(destination === "Brunei" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Brunei />)}
      {(destination === "Bahrain" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Bahrain />)}
      {(destination === "Bulgaria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Bulgaria />)}
      {(destination === "Bangladesh" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Bangladesh />)}
      {(destination === "Bolivia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Bolivia />)}
      {(destination === "Brazil" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Brazil />)}
      {(destination === "Burkina Faso" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_BurkinaFaso />)}
      {(destination === "Benin" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Benin />)}
      {(destination === "Burundi" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Burundi />)}
      {(destination === "Cambodia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Cambodia />)}
      {(destination === "China" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_China />)}
      {(destination === "Chile" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Chile />)}
      {(destination === "Cape Verde" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_CapeVerde />)}
      {(destination === "Democratic Republic of the Congo" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && ( (<Official_Us_DemocraticRepCongo />) )}
      {(destination === "Ivory Coast" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_IvoryCoast />)}
      {(destination === "Republic of the Congo" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Congo />)}
      {(destination === "Central African Republic" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&& (  (<Official_Us_CentralAfricanRepublic />))}
      {(destination === "Cameroon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Cameroon />)}
      {(destination === "Djibouti" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Djibouti />)}
      {(destination === "Dominican Republic" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_DominicanRepublic />)}
      {(destination === "Ecuador" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Ecuador />)}
      {(destination === "Eritrea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Eritrea />)}
      {(destination === "Egypt" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Egypt />)}
      {(destination === "Ethiopia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Ethiopia />)}
      {(destination === "France" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_France />)}
      {(destination === "Gabon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Gabon />)}
      {(destination === "Ghana" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Ghana />)}
      {(destination === "Gambia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Gambia />)}
      {(destination === "Guinea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Guinea />)}
      {(destination === "Greece" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_Greece />)}
      {(destination === "Guinea-Bissau" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_GuineaBissau />)}

      {(destination === "Haiti" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Haiti />)}

      {(destination === "Israel" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Israel />)}
      {(destination === "India" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_India />)}
      {(destination === "Indonesia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Indonesia />)}
      {(destination === "Iraq" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Iraq />)}

      {(destination === "Japan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Japan />)}
      {(destination === "Jamaica" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Jamaica />)}
      {(destination === "Jordon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Jordon />)}

      {(destination === "Kazakhstan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Kazakhstan />)}
      {(destination === "Kenya" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Kenya />)}
      {(destination === "South Korea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_KoreaSouth />)}
      {(destination === "Kuwait" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Kuwait />)}
      {(destination === "Kyrgyzstan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Kyrgyzstan />)}

      {(destination === "Laos" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Laos />)}
      {(destination === "Liberia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Liberia />)}
      {(destination === "Libya" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Libya />)}
      {(destination === "Lebanon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Lebanon />)}

      {(destination === "Madagascar" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Madagascar />)}
      {(destination === "Malawi" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Malawi />)}
      {(destination === "Mali" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Mali />)}
      {(destination === "Mauritania" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Mauritania />)}
      {(destination === "Mongolia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Mongolia />)}
      {(destination === "Mozambique" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Mozambique />)}
      {(destination === "Myanmar" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Myanmar />)}

      {(destination === "Nigeria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Nigeria />)}
      {(destination === "Namibia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Namibia />)}
      {(destination === "Nepal" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Nepal />)}
      {(destination === "Niger" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Niger />)}

      {(destination === "Oman" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Oman />)}

      {(destination === "Philippines" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Philippines />)}
      {(destination === "Peru" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Peru />)}
      {(destination === "Paraguay" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Paraguay />)}
      {(destination === "Pakistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Pakistan />)}
      {(destination === "Qatar" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Qatar />)}

      {(destination === "Russia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Russia />)}

      {(destination === "Sri Lanka" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_SriLanka />)}
      {(destination === "Spain" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Spain />)}
      {(destination === "Suriname" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Suriname />)}
      {(destination === "South Sudan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_SouthSudan />)}
      {(destination === "Sierra Leone" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_SierraLeone />)}
      {(destination === "Sudan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Sudan />)}
      {(destination === "South Africa" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_SouthAfrica />)}
      {(destination === "Saudi Arabia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_SaudiArabia />)}

      {(destination === "Tajikistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Tajikistan />)}
      {(destination === "Tanzania" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Tanzania />)}
      {(destination === "Thailand" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Thailand />)}
      {(destination === "Turkey" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Turkey />)}
      {(destination === "Turkmenistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Turkmenistan />)}
      {(destination === "Togo" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Togo />)}
      {(destination === "Trinidad and Tobago" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_TrinidadAndTobago />)}

      {(destination === "Uruguay" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Uruguay />)}
      {(destination === "Uzbekistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Uzbekistan />)}
      {(destination === "Vietnam" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Vietnam />)}
      {(destination === "Yemen" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Yemen />)}
      {(destination === "Zambia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Zambia />)}
      {(destination === "Zimbabwe" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Zimbabwe />)}
    </div>
  );
}

export default USCitizen;
