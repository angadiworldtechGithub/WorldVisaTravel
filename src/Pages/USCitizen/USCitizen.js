import React from "react";
import { useLocation } from "react-router-dom";
import "./USCitizen.css";
import Support from "../../Support/Support";

import Tourist_Us_Afghanitan from '../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Afghanitan';
import Tourist_Us_Australia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Australia";
import Tourist_Us_Azerbaijan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Azerbaijan";
import Tourist_Us_Bahrain from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Bahrain";
import Tourist_Us_Bangladesh from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Bangladesh";
import Tourist_Us_Belarus from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Belarus";
import Tourist_Us_Benin from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Benin";
import Tourist_Us_Bolivia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Bolivia";
import Tourist_Us_Brazil from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Brazil";
import Tourist_Us_Burkina from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Burkina";
import Tourist_Us_Burundi from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Burundi";

import Tourist_Us_Cameroon from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Cameroon";
import Tourist_Us_Capeverde from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Capeverde";
import Tourist_Us_Centralafrican from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Centralafrican";
import Tourist_Us_Chad from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Chad";
import Tourist_Us_China from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_China";
import Tourist_Us_Christamisland from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Christamsisland";
import Tourist_Us_Cocosisland from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Cocosisland";
import Tourist_Us_Congo from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Congo";


import Tourist_Us_Egypt from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Egypt";
import Tourist_Us_Eritrea from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Eritrea";
import Tourist_Us_Ethiopia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Ethiopia";
import Tourist_Us_Gabon from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Gabon";
import Tourist_Us_Gambia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Gambia";
import Tourist_Us_Ghana from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Ghana";
import Tourist_Us_Guinea from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Guinea";
import Tourist_Us_India from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_India";
import Tourist_Us_Indonesia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Indonesia";
import Tourist_Us_Iran from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Iran";
import Tourist_Us_Iraq from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Iraq";
import Tourist_Us_Djibouti from '../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Djibouti';

import Tourist_Us_Kazakhstan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Kazakhstan";
import Tourist_Us_Kenya from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Kenya";
import Tourist_Us_Kyrgyzstan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_kyrgyzstan";
import Tourist_Us_Laos from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Laos";
import Tourist_Us_Lebanon from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Lebanon";
import Tourist_Us_Liberia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Liberia";
import Tourist_Us_Libya from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Libya";

import Tourist_Us_Madagascar from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Madagascar";
import Tourist_Us_Malawi from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Malawi";
import Tourist_Us_Malaysia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Malaysia";
import Tourist_Us_Mali from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Mali";
import Tourist_Us_Mozanbique from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Mozanbique";
import Tourist_Us_Myanmar from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Myanmar";

import Tourist_Us_Namibia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Namibia";
import Tourist_Us_Nepal from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Nepal";
import Tourist_Us_Niger from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Niger";
import Tourist_Us_Nigeria from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Nigeria";
import Tourist_Us_Norfolk from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Norfolk";
import Tourist_Us_Oman from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Oman";

import Tourist_Us_Pakistan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Pakistan";
import Tourist_Us_Papunew from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Papuanew";
import Tourist_Us_Philippines from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Philippines";
import Tourist_Us_Qatar from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Qatar";
import Tourist_Us_Russia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Russia";
import Tourist_Us_Rwanda from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Rwanda";

import Tourist_Us_Saudi from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Saudi";
import Tourist_Us_Sierraleone from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Sierraleone";
import Tourist_Us_Southsudan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Southsudan";
import Tourist_Us_Srilanka from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Srilanka";
import Tourist_Us_Sudan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Sudan";
import Tourist_Us_Suriname from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Suriname";


import Tourist_Us_Taiwan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Taiwan";
import Tourist_Us_Tajikistan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Tajikistan";
import Tourist_Us_Tanzania from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Tanzania";
import Tourist_Us_Togo from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Togo";
import Tourist_Us_Turkey from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Turkey";
import Tourist_Us_Turkmenistan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Turkmenistan";

import Tourist_Us_Uganda from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Uganda";
import Tourist_Us_Uzbekistan from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Uzbekistan";
import Tourist_Us_Vietanam from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Vietanam";
import Tourist_Us_Zambia from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Zambia";
import Tourist_Us_Zimbabwe from "../../Components/Tourist_visa/Tourist_Us_visa/Tourist_Us_Zimbabwe";

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
import Business_Us_Visa_Sudan from "../../Components/Business_visa/Business_Us_Visa/Business_Us_Visa_Sudan"

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


import Official_Us_Afghanistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Afghanistan";
import Official_Us_UnitedArabEmirates from "../../Components/Official_visa/Official_us_visa/Official_Us_UnitedArabEmirates";

import Official_Us_Argentina from "../../Components/Official_visa/Official_us_visa/Official_Us_Argentina";
import Official_Us_Angola from "../../Components/Official_visa/Official_us_visa/Official_Us_Angola";
import Official_Us_Armenia from "../../Components/Official_visa/Official_us_visa/Official_Us_Armenia";
import Official_Us_Azerbaijan from "../../Components/Official_visa/Official_us_visa/Official_Us_Azerbaijan";
import Official_Us_Algeria from "../../Components/Official_visa/Official_us_visa/Official_Us_Algeria";
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
import Official_Us_Chad from "../../Components/Official_visa/Official_us_visa/Official_Us_Chad";
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
import Official_Us_PapuaNewGuinea from "../../Components/Official_visa/Official_us_visa/Official_Us_PapuaNewGuinea";
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

   // Access the current path
   const currentPathlocations = location.pathname;
   console.log(currentPathlocations)

  const country = searchParams.get("country");
  const destination = searchParams.get("destination");

  console.log("COuntry", country && country);
  console.log("DESTINATION", destination && destination);

  return (
    <div className="Us-citizen">
      <center>
        <h2 className="Us-citizen-Header">US Citizens</h2>
      </center>
      <center>
        <h3 className="Us-citizen-country">{destination && destination}</h3>
      </center>
      
      {(destination === "Afghanistan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Afghanitan />)}
      {(destination === "Azerbaijan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Azerbaijan/>)}
      {(destination === "Australia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Australia />)}
      {(destination === "Bahrain" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Bahrain />)}
      {(destination === "Bangladesh" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Bangladesh />)}
      {(destination === "Belarus" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Belarus />)}
      {(destination === "Benin" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Benin />)}
      {(destination === "Bolivia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Bolivia />)}
      {(destination === "Brazil" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Brazil />)}
      {(destination === "Burkina Faso" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Burkina />)}
      {(destination === "Burundi" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Burundi />)}
     

      {(destination === "Cameroon" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Cameroon />)}
      {(destination === "Cape Verde" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Capeverde/>)}
      {(destination === "Central African Republic" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Centralafrican />)}
      {(destination === "Chad" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Chad/>)}
      {(destination === "China" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_China/>)}
      {(destination === "Christmas Island" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Christamisland />)}
      {(destination === "Cocos [Keeling] Islands" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Cocosisland />)}
      {(destination === "Democratic Republic of the Congo" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Congo/>)}
     

      {(destination === "Djibouti" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Djibouti/>)}
      {(destination === "Egypt" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Egypt/>)}
      {(destination === "Eritrea" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Eritrea/>)}
      {(destination === "Ethiopia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Ethiopia/>)}
      {(destination === "Gabon" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Gabon/>)}
      {(destination === "Gambia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Gambia/>)}
      {(destination === "Ghana" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Ghana/>)}
      {(destination === "Guinea" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Guinea/>)}
      {(destination === "India" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_India/>)}
      {(destination === "Indonesia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Indonesia/>)}
      {(destination === "Iran" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Iran/>)}
      {(destination === "Iraq" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Iraq/>)}
      {(destination === "Indonesia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Indonesia />)}
      

      {(destination === "Kazakhstan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Kazakhstan/>)}
      {(destination === "Kenya" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Kenya/>)}
      {(destination === "Kyrgyzstan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Kyrgyzstan/>)}
      {(destination === "Laos" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Laos/>)}
      {(destination === "Lebanon" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Lebanon/>)}
      {(destination === "Liberia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Liberia/>)}
      {(destination === "Libya" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Libya/>)}
      
      {(destination === "Madagascar" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Madagascar/>)}
      {(destination === "Malawi" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Malawi/>)}
      {(destination === "Malaysia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Malaysia/>)}
      {(destination === "Mali" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Mali/>)}
      {(destination === "Mozambique" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Mozanbique/>)}
      {(destination === "Myanmar [Burma]" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Myanmar/>)}
     
      {(destination === "Namibia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Namibia/>)}
      {(destination === "Nepal" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Nepal/>)}
      {(destination === "Niger" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Niger/>)}
      {(destination === "Nigeria" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Nigeria/>)}
      {(destination === "Norfolk Island" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Norfolk/>)}
      {(destination === "Oman" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Oman/>)}
      
      {(destination === "Pakistan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Pakistan/>)}
      {(destination === "Papua New Guinea" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Papunew/>)}
      {(destination === "Philippines" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Philippines/>)}
      {(destination === "Qatar" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Qatar/>)}
   
      {(destination === "Russia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Russia/>)}
      {(destination === "Rwanda" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Rwanda/>)}
      
      {(destination === "Saudi Arabia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Saudi/>)}
      {(destination === "Sierra Leone" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Sierraleone/>)}
      {(destination === "South Sudan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Southsudan/>)}
      {(destination === "Sri Lanka" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Srilanka/>)}
      {(destination === "Sudan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Sudan/>)}
      {(destination === "Suriname" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Suriname/>)}
      
      {(destination === "Taiwan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Taiwan/>)}
      {(destination === "Tajikistan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Tajikistan/>)}
      {(destination === "Tanzania" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Tanzania/>)}
      {(destination === "Togo" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Togo/>)}
      {(destination === "Turkey" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Turkey/>)}
      {(destination === "Turkmenistan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Turkmenistan/>)}
      
      {(destination === "Uganda" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Uganda/>)}
      {(destination === "Uzbekistan" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Uzbekistan/>)}
      {(destination === "Vietnam" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Vietanam/>)}
      {(destination === "Zambia" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Zambia/>)}
      {(destination === "Zimbabwe" && currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen") && (<Tourist_Us_Zimbabwe/>)}
     
 
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
      {(destination === "Central African Republic" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_CentralAfricanRepublic />}
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
      {(destination === "Sudan" && currentPathlocations==="/visas/business-visa/USCitizens/USCitizen" ) && <Business_Us_Visa_Sudan/>}

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
   
   
     {/* Official Visas */}
     {(destination === "Afghanistan"  && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Afghanistan />) }
     {(destination === "United Arab Emirates"  && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_UnitedArabEmirates />)}
     {(destination === "American Samoa" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<Official_Us_AmericanSamoa />)}
     {(destination === "Argentina" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Argentina />)}
     {(destination === "Angola" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Angola />)}
     {(destination === "Armenia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&& (<Official_Us_Armenia />)}
     {(destination === "Azerbaijan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&(<Official_Us_Azerbaijan />)}
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
     {(destination === "Chad" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<Official_Us_Chad />)}
     
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
     {(destination === "Myanmar [Burma]" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Myanmar />)}

     {(destination === "Nigeria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Nigeria />)}
     {(destination === "Namibia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Namibia />)}
     {(destination === "Nepal" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Nepal />)}
     {(destination === "Niger" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Niger />)}

     {(destination === "Oman" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Oman />)}

     {(destination === "Philippines" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Philippines />)}
     {(destination === "Peru" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Peru />)}
     {(destination === "Paraguay" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Paraguay />)}
     {(destination === "Pakistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_Pakistan />)}
     {(destination === "Papua New Guinea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<Official_Us_PapuaNewGuinea/>)}
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

   {/* Empty Components for Business Visa */}

   {(((destination === "Andorra" || "Antigua and Barbuda" || "Anguilla" || "Albania" || "Angola" || "Argentina" || "Austria" || "Aruba" || "Bahamas" || "Bosnia Herzegovina" || "Belgium" || "Bulgaria" || "Saint Barthelemy" || "Bermuda" || "Brunei" || "Bonaire" || "Bhutan" || "Botswana" || "Bouvet Island" ||
   "Belize" || "Canada" || "Cocos Island" || "Switzerland" || "Chile" || "Cooks Island" || "Colombia" || "Costa Rica" || "Cuba" || "Curacao" || "Christmas Island" || "Cyprus" || "Czech Republic" || "Germany" || "Algeria" || "Denmark" || "Dominica" || "Dominican Republic" || "Ecuador" ||
   "Estonia" || "Egypt" || "Westren Sahara" || "Spain" || "Finland" || "Fiji" || "Micronesia" || "France" || "United Kingdom" || "Grenada" || "Georgia" || "French Guiana" || "Gibral Tar" || "Greenland" || "Guadeloupe" || "Equatorial Guinea" || "Greece" || "Guatemala" || "Guam" || "Guinea Bissau" ||
   "Guyana" || "Hong Kong" || "Honduras" || "Croatia" || "Haiti" || "Hungary" || "Ireland" || "Israel" || "Iceland" || "Italy" || "Japan" || "Kyrgyzstan" || "Kiribati" || "Saint Kitts and Nevis" || "Kuwait" || "Cayman Islands" || "Saint Lucia" || "Liechtenstein" || "Lesotho" || "Lithuania" || "Luxembourg" ||
   "Latvia" || "Morocco" || "Monaco" || "Moldova" || "Montenegro" || "Saint Martin" || "Madagascar" || "Marshall Islands" || "Mongolia" || "Macau" || "Northern Mariana" || "Martinique" || "Mauritania" || "Montserrat" || "Malta" || "Mauritius" || "Maldives" || "Mexico" || "Namibia" || "New Caledonia" || "Norfolk Island" ||
   "Nicaragua" || "Netherlands" || "Norway" || "Nauru" || "Niue" || "New Zealand" || "Panama" || "French Polynesia" || "Poland" || "Saint Pierre and Miquelon" || "Puerto Rico" || "Portugal" || "Paraguay" || "Reunion Island" || "Romania" || "Serbia" || "Solomon Islands" || "Seychelles" || "Sweden" || "Singapore" || "Slovenia" ||
   "Slovakia" || "San Marino" || "Senegal" || "Sao Tome and Principe" || "El Salvador" || "Sint Maarten" || "Syria" || "Swaziland" || "Turks and Caicos Islands" || "Tokelau" || "Tunisia" || "Tonga" || "Trinidad & Tobago" || "Tuvalu" || "Ukraine" || "Uruguay" || "Saint Vincent and the Grenadines" || "Venezuela" || "Vanuatu" ||
   "Wallis and Futuna" || "Samoa" || "Mayotte" || "South Africa" || "Zimbabwe" || "Malaysia" || "Antarctica" || "American Samoa" || "Aland" || "Barbados" || "Democratic Republic of Congo" || "Republic of Congo" || "Falkland Islands" || "Faroe Islands" || "Guernsey" || "Heard Island and McDonald Islands" || "Isle of Man" || "Jersey" ||
    "Comoros" || "North Korea" || "South Korea" || "North Macedonia" || "Pitcairn Islands" || "Palestine" || "Palau" || "Saint Helena" || "Svalbard and Jan Mayen" || "Somalia" || "French Southern Territories" || "East Timor" || "U.S. Minor Outlying Islands" || "United States" || "Vatican City" || "British Virgin Islands" || "U.S. Virgin Islands" || "Kosovo") &&
   (currentPathlocations === "/visas/business-visa/USCitizens/USCitizen")) &&
   (<Support />))}

  {/* Empty Components for Tourist Visa */}

  {(((destination !== "Afghanistan"|| "Azerbaijan"||"Australia"||"Bahrain"||"Bangladesh"||"Belarus"||"Benin"||"Bolivia"||"Brazil"
  ||"Burkina Faso"||"Burundi"||"Cameroon"||"Cape Verde"||"Central African Republic"||"Chad"||"China"||"Christmas Island"
  ||"Cocos [Keeling] Islands"||"Democratic Republic of the Congo"||"Djibouti"||"Egypt"||"Eritrea"||"Gabon"      ||"Gambia"||"Ghana"||"Guinea"||"India"||"Indonesia"||"Iran"||"Iraq"||"Kazakhstan"||"Kenya"
  ||"Kyrgyzstan"||"Laos"||"Lebanon"||"Liberia"||"Libya"||"Madagascar"||"Malawi"||"Malaysia"||"Mali"||"Mozambique"||"Myanmar [Burma]"||"Namibia"||"Nepal"||"Niger"||"Nigeria"||"Norfolk Island"||"Oman"||"Pakistan"||"Papua New Guinea"||"Philippines"||"Qatar"||"Russia" || "Rwanda"||"Saudi Arabia"||"Sierra Leone"||"South Sudan"||"Sri Lanka"||"Sudan"
  ||"Suriname"|| "Taiwan"||"Tajikistan"||"Tanzania"||"Togo"||"Turkey"||"Turkmenistan"  ||"Uganda"||"Uzbekistan"||"Vietnam"||"Zambia"||"Zimbabwe") &&
  (currentPathlocations === "/visas/tourist-visa/USCitizens/USCitizen")) &&
  (<Support />))}
  {/* Empty Components for official Visa */}
{((destination !== "Afghanistan" || "Algeria" || "American Samoa" || "Angola"|| "Argentina"|| "Armenia"|| "Australia"|| "Azerbaijan"|| "Bahrain"|| "Bangladesh"|| "Barbados"|| "Belarus"|| "Benin"|| "Bolivia"|| "Brazil"|| "Brunei"|| "Bulgaria"|| "Burkina Faso"|| "Burundi"
        || "Cambodia"|| "Cameroon"|| "Cape Verde"|| "Central African Republic"|| "Chad"|| "Chile"|| "China"|| "Congo"|| "Democratic Republic of the Congo"|| "Republic of the Congo"|| "Djibouti"|| "Dominican Republic"|| "Ecuador"|| "Egypt"|| "Eritrea"|| "Ethiopia"|| "France"
        || "Gabon"|| "Gambia"|| "Ghana"|| "Greece"|| "Guinea"|| "Guinea Bissau"|| "Haiti"|| "India" || "Indonesia"|| "Iraq"|| "Israel"|| "Ivory Coast"|| "Jamaica"|| "Japan"|| "Jordan"|| "Kazakhstan"|| "Kenya"|| "Korea South"|| "Kuwait"|| "Kyrgyzstan"|| "Laos"|| "Lebanon"|| "Liberia"
        || "Libya"|| "Madagascar"|| "Malawi"|| "Malai"|| "Mauritania"|| "Mongolia"|| "Mozambique"|| "Myanmar"|| "Namibia"|| "Nepal"|| "Niger"|| "Nigeria"|| "Oman"|| "Pakistan"|| "Peru"|| "Papua New Guinea"|| "Phillipines"|| "Qatar"|| "Saudi Arabia"|| "Sierra Leone"|| "South Africa"
        || "South Korea"|| "South Sudan"|| "Spain"|| "Sri Lanka"|| "Sudan"|| "Suriname"|| "Tajikistan"|| "Tanzania"|| "Thailand"|| "Togo"|| "Trinidad and Tobago"|| "Turkey"|| "Turkmenistan"
        || "Uruguay"|| "United Arab Emirates"|| "Uzbekistan"|| "Vietnam"|| "Yemen"|| "Zambia"|| "Zimbabwe")&&
        (currentPathlocations==="/visas/official-visa/Non-USCitizens/NonUsCitizen" )) && <Support/>}
      </div>
  );
}

export default USCitizen;