import React from 'react'
import { useLocation } from 'react-router-dom';
import "./NonUsCitizen.css";
import Support from '../../Support/Support';

import BelarusTouristNonUs from '../../Components/Tourist_visa/Tourist_non_us_visa/BelarusTouristNonUs';
import Tourist_nonUs_Belize from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Belize';
import Tourist_nonUs_Brunei from "../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Brunei";
import Tourist_nonUs_Botswana from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Botswana';
import Tourist_nonUs_Bulgaria from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bulgaria';
import Tourist_nonUs_Bolivia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bolivia';
import Tourist_nonUs_Brazil from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Brazil';
import Tourist_nonUs_BurkinaFaso from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_BurkinaFaso';
import Tourist_nonUs_Burundi from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Burundi';
import Tourist_nonUs_Benin from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Benin';
import Tourist_nonUs_Barbados from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Barbados';
import Tourist_nonUs_Combodia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Combodia';
import Tourist_nonUs_China from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_China';
import Tourist_nonUs_Cameroon from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Cameroon';
import Tourist_nonUs_Central_African_Republic from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Central_African_Republic';
import Tourist_nonUs_Bangladesh from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bangladesh';
import Tourist_nonUs_Bahamas from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bahamas';
import Tourist_nonUs_Congo from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Congo';
import Tourist_nonUs_CapeVarde from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_CapeVarde';
import Tourist_nonUs_Djibouti from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Djibouti';
import Tourist_nonUs_Ecuador from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Ecuador';
import Tourist_nonUs_Eritrea from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Eritrea';
import Tourist_nonUs_Egypt from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Egypt';
import Tourist_nonUs_Ethiopia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Ethiopia';
import Tourist_nonUs_Fiji from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Fiji';
import Tourist_nonUs_Gabon from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Gabon';
import Tourist_nonUs_Ghana from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Ghana';
import Tourist_nonUs_Gambia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Gambia';
import Tourist_nonUs_Guinea from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Guinea';
import Tourist_nonUs_Georgia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Georgia';
import Tourist_nonUs_Honduras from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Honduras';
import Tourist_nonUs_Iraq from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Iraq';
import Tourist_nonUs_IvoryCoast from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_IvoryCoast';
import Tourist_nonUs_India from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_India';
import Tourist_nonUs_Indonesia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Indonesia';
import Tourist_nonUs_Iran from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Iran';
import Tourist_nonUs_Jamaica from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Jamaica';
import Tourist_nonUs_Jordan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Jordan';
import Tourist_nonUs_Kazakhatan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Kazakhstan';
import Tourist_nonUs_kyrgyzstan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_kyrgyzstan';
import Tourist_nonUs_Laos from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Laos';
import Tourist_nonUs_Liberia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Liberia';
import Tourist_nonUs_Libya from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Libya';
import Tourist_nonUs_Lebanon from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Lebanon';
import Tourist_nonUs_Lesotho from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Lesotho';
import Tourist_nonUs_Malaysia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Malaysia';
import Tourist_nonUs_Moldova from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Moldova';
import Tourist_nonUs_Morocco from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Morocco';
import Tourist_nonUs_Madagascar from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Madagascar';
import Tourist_nonUs_Mongolia from '../../Components/Tourist_visa/Tourist_non_us_visa/tourist_nonUs_Mongolia';
import Tourist_nonUs_Mozambique from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Mozambique';
import Tourist_nonUs_Malawi from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Malawi';
import Tourist_nonUs_Myanmar from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Myanmar';
import Tourist_nonUs_Nambia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Nambia';
import Tourist_nonUs_Nigeria from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Nigeria';
import Tourist_nonUs_Nepal from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Nepal';
import Tourist_nonUs_Nicaragua from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Nicaragua';
import Tourist_nonUs_Niger from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Niger';
import Tourist_nonUs_Thailand from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Thailand';
import Tourist_nonUs_Singapore from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Singapore';
import Tourist_nonUs_SouthAfrica from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_SouthAfrica';
import Tourist_nonUs_SouthSudan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_SouthSudan';
import Tourist_nonUs_Sudan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Sudan';
import Tourist_nonUs_Suriname from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Suriname';
import Tourist_nonUs_Swaziland from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Swaziland';
import Tourist_nonUs_SierraLeone from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_SierraLeone';
import Tourist_nonUs_Oman from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Oman';
import Tourist_nonUs_Russia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Russia';
import Tourist_nonUs_Qatar from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Qatar';
import Tourist_nonUs_Philipians from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Philipians';
import Tourist_nonUs_Peru from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Peru';
import Tourist_nonUs_Pakistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Pakistan';
import Tourist_nonUs_PapuaNewGuinea from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_PapuaNewGuinea';
import Tourist_nonUs_Taiwan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Taiwan';
import Tourist_nonUs_TrinidadAndTobago from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_TrinidadAndTobago';
import Tourist_nonUs_Uzbekistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Uzbekistan';
import Tourist_nonUs_Ukraine from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Ukraine';
import Tourist_nonUs_Vietanam from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Vietanam';
import Tourist_nonUs_Turkey from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Turkey';
import Tourist_nonUs_Tanzania from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Tanzania';
import Tourist_nonUs_Tunisia from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Tunisia';
import Tourist_nonUs_Togo from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Togo';
import Tourist_nonUs_Tajikistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Tajikistan';
import Tourist_nonUs_Turkmenistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Turkmenistan';
import Tourist_nonUs_Afghanistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Afghanistan';
import Tourist_nonUs_Azerbaijan from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Azerbaijan';


import Business_NonUs_Afghanistan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Afghanistan";
import Business_NonUs_Azerbaijan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Azerbaijan";
import Business_NonUs_Australia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Australia";
import Business_NonUs_Algeria from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Algeria";
import Business_NonUs_Belize from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Belize";
import Business_NonUs_Brazil from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Brazil";
import Business_NonUs_Bolivia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Bolivia";

import Business_NonUs_Chad from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Chad";
import Business_NonUs_Congo from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Congo";
import Business_NonUs_CentralAfricanRepublic from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_CentralAfricanRepublic";
import Business_NonUs_Cameroon from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Cameroon";
import Business_NonUs_China from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_China";
import Business_NonUs_Cambodia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Cambodia";
import Business_NonUs_Dijbouti from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Dijbouti";
import Business_NonUs_Ethiopia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ethiopia";
import Business_NonUs_Ecuador from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ecuador";
import Business_NonUs_Egypt from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Egypt";
import Business_NonUs_Eritrea from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Eritrea";
import Business_NonUs_Fiji from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Fiji";
import Business_NonUs_Guinea from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Guinea";
import Business_NonUs_Georgia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Georgia";
import Business_NonUs_Gambia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Gambia";
import Business_NonUs_Ghana from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ghana";
import Business_NonUs_Gabon from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Gabon";
import Business_NonUs_CongoDemocraticRepublic from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Congo(DemocraticRepublic)";
import Business_NonUs_Honduras from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Honduras";
import Business_NonUs_Iran from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Iran";
import Business_NonUs_Indonesia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Indonesia";
import Business_NonUs_India from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_India";
import Business_NonUs_IvoryCoast from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_IvoryCoast";
import Business_NonUs_Iraq from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Iraq";
import Business_NonUs_Jordan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Jordon";
import Business_NonUs_Jamaica from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Jamaica";
import Business_NonUs_Kyrgyzstan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Kyrgyzstan";
import Business_NonUs_KoreaSouth from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_KoreaSouth";
import Business_NonUs_Kazakhstan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_kazakhstan";
import Business_NonUs_Lesotho from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Lesotho";
import Business_NonUs_Lebanon from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Lebanon";
import Business_NonUs_Libya from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Libya";
import Business_NonUs_Liberia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Liberia";
import Business_NonUs_Laos from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Laos";
import Business_NonUs_Myanmar from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Myanmar";
import Business_NonUs_Malawi from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Malawi";
import Business_NonUs_Mozambique from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Mozambique";
import Business_NonUs_Mongolia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Mongolia";
import Business_NonUs_Mali from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Mali";
import Business_NonUs_Madagascar from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Madagascar";
import Business_NonUs_Morocco from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Morocco";
import Business_NonUs_Moldova from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Moldova";
import Business_NonUs_Malaysia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Malaysia";
import Business_NonUs_SouthAfrica from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_SouthAfrica";
import Business_NonUs_Suriname from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Suriname"
import Business_NonUs_SouthSudan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_SouthSudan"
import Business_NonUs_Swaziland from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Swaziland"
import Business_NonUs_Taiwan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Taiwan"
import Business_NonUs_Tajikistan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Tajikistan"
import Business_NonUs_Tanzania from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Tanzania"
import Business_NonUs_Thailand from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Thailand"
import Business_NonUs_Togo from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Togo"
import Business_NonUs_Tunisia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Tunisia"
import Business_NonUs_Turkey from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Turkey"
import Business_NonUs_Uganda from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Uganda"
import Business_NonUs_Ukraine from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ukraine"
import Business_NonUs_Vietnam from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Vietnam"
import Business_NonUs_TrinidadTobago from '../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_TrinidadTobago';
import Business_NonUs_Sudan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Sudan";
import Business_NonUs_Namibia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Namibia";
import Business_NonUs_Nepal from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Nepal";
import Business_NonUs_Nicaragua from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Nicaragua";
import Business_NonUs_Niger from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Niger";
import Business_NonUs_Nigeria from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Nigeria";
import Business_NonUs_Oman from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Oman";
import Business_NonUs_Pakistan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Pakistan";
import Business_NonUs_PapuaNewGuinea from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_PapuaNewGuinea";
import Business_NonUs_Peru from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Peru";

import Business_NonUs_Philippines from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Philippines";
import Business_NonUs_Qatar from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Qatar";
import Business_NonUs_Rwanda from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Rwanda";
import Business_NonUs_SaudiArabia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_SaudiArabia";
import Business_NonUs_Singapore from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Singapore";
import Business_NonUs_Turkmenistan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Turkmenistan";
import Business_NonUs_SierraLeone from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_SierraLeone";
import Business_NonUs_Russia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Russia";




const NonUsCitizen = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);

    // Access the current path
    const currentPathlocation = location.pathname;
    console.log(currentPathlocation)

    const country = searchParams.get('country'); 
    const destination = searchParams.get('destination');
    

  console.log("Country", country && country);

  return (
    <div className='NonUs-citizen'>
     <center><h2 className="NonUs-citizen-Header">Non-US Citizens</h2></center>
     <center><h3 className="NonUs-citizen-country">{destination && destination}</h3></center>
      

{/* Tourist_visas */}

{(destination === "Afghanistan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Afghanistan />)}
      {(destination === "Azerbaijan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Azerbaijan />)}
      {(destination === "Belarus" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<BelarusTouristNonUs />)}
      {(destination === "Belize" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Belize />)}
      {(destination === "Brunei" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Brunei />)}
      {(destination === "Bahamas" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Bahamas />)}
      {(destination === "Botswana" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Botswana />)}
      {(destination === "Bulgaria" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Bulgaria />)}
      {(destination === "Bangladesh" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Bangladesh />)}
      {(destination === "Bolivia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Bolivia />)}
      {(destination === "Brazil" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Brazil />)}
      {(destination === "Burkina Faso" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_BurkinaFaso />)}
      {(destination === "Burundi" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Burundi />)}
      {(destination === "Benin" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Benin />)}
      {(destination === "Barbados" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Barbados />)}
      {(destination === "Cambodia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Combodia />)}
      {(destination === "China" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_China />)}
      {(destination === "Cameroon" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Cameroon />)}
      {(destination === "Central African Republic" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Central_African_Republic />)}
      {(destination === "Republic of the Congo" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Congo />)}
      {(destination === "Cape Verde" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_CapeVarde />)}
      {(destination === "Djibouti" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Djibouti />)}
      {(destination === "Ecuador" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Ecuador />)}
      {(destination === "Eritrea" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Eritrea />)}
      {(destination === "Egypt" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Egypt />)}
      {(destination === "Ethiopia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Ethiopia />)}
      {(destination === "Fiji" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Fiji />)}
      {(destination === "Gabon" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Gabon />)}
      {(destination === "Ghana" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Ghana />)}
      {(destination === "Gambia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Gambia />)}
      {(destination === "Guinea" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Guinea />)}
      {(destination === "Georgia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Georgia />)}
      {(destination === "Honduras" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Honduras />)}
      {(destination === "Iraq" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Iraq />)}
      {(destination === "Ivory Coast" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_IvoryCoast />)}
      {(destination === "India" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_India />)}
      {(destination === "Indonesia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Indonesia />)}
      {(destination === "Iran" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Iran />)}
      {(destination === "Jamaica" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Jamaica />)}
      {(destination === "Jordan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Jordan />)}
      {(destination === "Kazakhstan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Kazakhatan />)}
      {(destination === "Kyrgyzstan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_kyrgyzstan />)}
      {(destination === "Laos" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Laos />)}
      {(destination === "Liberia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Liberia />)}
      {(destination === "Libya" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Libya />)}
      {(destination === "Lebanon" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Lebanon />)}
      {(destination === "Lesotho" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Lesotho />)}
      {(destination === "Malaysia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Malaysia />)}
      {(destination === "Moldova" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Moldova />)}
      {(destination === "Morocco" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Morocco />)}
      {(destination === "Madagascar" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Madagascar />)}
      {(destination === "Mongolia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Mongolia />)}
      {(destination === "Mozambique" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Mozambique />)}
      {(destination === "Malawi" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Malawi />)}
      {(destination === "Myanmar [Burma]" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Myanmar />)}
      {(destination === "Namibia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Nambia />)}
      {(destination === "Nigeria" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Nigeria />)}
      {(destination === "Nepal" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Nepal />)}
      {(destination === "Nicaragua" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Nicaragua />)}
      {(destination === "Niger" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Niger />)}
      {(destination === "Oman" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Oman />)}
      {(destination === "Russia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Russia />)}
      {(destination === "Qatar" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Qatar />)}
      {(destination === "Philippines" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Philipians />)}
      {(destination === "Peru" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Peru />)}
      {(destination === "Pakistan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Pakistan />)}
      {(destination === "Papua New Guinea" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_PapuaNewGuinea />)}
      {(destination === "Singapore" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Singapore />)}
      {(destination === "South Africa" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_SouthAfrica />)}
      {(destination === "South Sudan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_SouthSudan />)}
      {(destination === "Sudan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Sudan />)}
      {(destination === "Suriname" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Suriname />)}
      {(destination === "Swaziland" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Swaziland />)}
      {(destination === "Sierra Leone" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_SierraLeone />)}
      {(destination === "Thailand" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Thailand />)}
      {(destination === "Turkmenistan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Turkmenistan />)}
      {(destination === "Taiwan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Taiwan />)}
      {(destination === "Trinidad and Tobago" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_TrinidadAndTobago />)}
      {(destination === "Tanzania" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Tanzania />)}
      {(destination === "Turkey" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Turkey />)}
      {(destination === "Tunisia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Tunisia />)}
      {(destination === "Togo" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Togo />)}
      {(destination === "Tajikistan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Tajikistan />)}
      {(destination === "Ukraine" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Ukraine />)}
      {(destination === "Uzbekistan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Uzbekistan />)}
      {(destination === "Vietnam" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Vietanam />)}
      {(destination === "Zambia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Thailand />)}
      {(destination === "Zimbabwe" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Taiwan />)}


{/* Business_visas */}
{(destination === "Afghanistan" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && ( <Business_NonUs_Afghanistan /> )}
{(destination === "Azerbaijan" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")  && (<Business_NonUs_Azerbaijan />)}
{(destination === "Australia" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")  && (<Business_NonUs_Australia />)}
{(destination === "Algeria" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")  && (<Business_NonUs_Algeria />)}
{(destination === "Belize"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Belize />)}
{(destination === "Brazil"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Brazil />)}
{(destination === "Bolivia" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_Bolivia />)}
{(destination === "Democratic Republic of the Congo" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_CongoDemocraticRepublic/>)}
{(destination === "Chad" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_Chad />)}
{(destination === "Republic of the Congo" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_Congo />)}
{(destination === "Central African Republic" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_CentralAfricanRepublic />)}
{(destination === "Cameroon" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_Cameroon />)}
{(destination === "China" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_China />)}\
{(destination === "Cambodia" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<Business_NonUs_Cambodia />)}
{(destination === "Djibouti"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Dijbouti/>)}
{(destination === "Ethiopia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Ethiopia/>)}
{(destination === "Ecuador"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Ecuador/>)}
{(destination === "Egypt"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Egypt/>)}
{(destination === "Eritrea"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Eritrea/>)}
{(destination === "Fiji"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Fiji/>)}
{(destination === "Guinea"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Guinea/>)}
{(destination === "Georgia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Georgia/>)}
{(destination === "Gambia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Gambia/>)}
{(destination === "Ghana"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Ghana/>)}
{(destination === "Gabon"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Gabon/>)}
{(destination === "Honduras"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Honduras/>)}
{(destination === "Iran"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Iran/>)}
{(destination === "Indonesia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Indonesia/>)}
{(destination === "India"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_India/>)}
{(destination === "Ivory Coast"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_IvoryCoast/>)}
{(destination === "Iraq"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Iraq/>)}
{(destination === "Jordan"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Jordan/>)}
{(destination === "Jamaica"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Jamaica/>)}
{(destination === "Kyrgyzstan"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Kyrgyzstan/>)}
{(destination === "South Korea"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_KoreaSouth/>)}
{(destination === "Kazakhstan"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Kazakhstan/>)}
{(destination === "Lesotho"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Lesotho/>)}
{(destination === "Lebanon"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Lebanon/>)}
{(destination === "Libya"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Libya/>)}
{(destination === "Liberia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Liberia/>)}
{(destination === "Laos"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Laos/>)}
{(destination === "Myanmar [Burma]"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Myanmar/>)}
{(destination === "Malawi"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Malawi/>)}
{(destination === "Mozambique"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Mozambique/>)}
{(destination === "Mongolia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Mongolia/>)}
{(destination === "Mali"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Mali/>)}
{(destination === "Madagascar"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Madagascar/>)}
{(destination === "Morocco"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Morocco/>)}
{(destination === "Moldova"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Moldova/>)}
{(destination === "Malaysia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_Malaysia/>)}
{(destination === "South Africa" && currentPathlocation === "/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<Business_NonUs_SouthAfrica/>)}
{(destination === "South Sudan" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && (<Business_NonUs_SouthSudan/>)}
{(destination === "Suriname" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && (<Business_NonUs_Suriname/>)}
{(destination === "Swaziland" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Swaziland/>}
{(destination === "Taiwan" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Taiwan/>}
{(destination === "Tajikistan" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Tajikistan/>}
{(destination === "Tanzania" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Tanzania/>}
{(destination === "Thailand" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Thailand/>}
{(destination === "Togo" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Togo/>}
{(destination === "Tunisia" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Tunisia/>}
{(destination === "Turkey" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Turkey/>}
{(destination === "Uganda" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Uganda/>}
{(destination === "Ukraine" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Ukraine/>}
{(destination === "Vietnam" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Vietnam/>}
{(destination === "Sudan" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Sudan/>}
{(destination === "Philippines" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Philippines/>}
{(destination === "Namibia" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Namibia/>}
{(destination === "Nepal" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Nepal/>}
{(destination === "Nicaragua" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Nicaragua/>}
{(destination === "Niger" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Niger/>}
{(destination === "Nigeria" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Nigeria/>}
{(destination === "Oman" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Oman/>}
{(destination === "Pakistan" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Pakistan/>}
{(destination === "Papua New Guinea" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_PapuaNewGuinea/>}
{(destination === "Peru" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Peru/>}
{(destination === "Trinidad and Tobago" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_TrinidadTobago/>}
{(destination === "Qatar" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Qatar/>}
{(destination === "Rwanda" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Rwanda/>}
{(destination === "Saudi Arabia" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_SaudiArabia/>}
{(destination === "Singapore" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Singapore/>}
{(destination === "Turkmenistan" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Turkmenistan/>}
{(destination === "Sierra Leone" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_SierraLeone/>}
{(destination === "Russia" && currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" ) && <Business_NonUs_Russia/>}

{/* Empty Components for Tourist Visa */}

{((destination !== "Afghanistan" || "Belarus" || "Belize" || "Brunei" || "Bahamas" || "Botswana" || "Bulgaria" || "Bangladesh" || "Bolivia" || "Brazil" || "Burkina Faso" || "Burundi" || "Benin" || "Barbados" || "Cambodia" || "China" ||
        "Cameroon" || "Central African Republic" || "Republic of the Congo" || "Cape Verde" || "Djibouti" || "Ecuador" || "Eritrea" || "Egypt" || "Ethiopia" || "Fiji" || "Gabon" || "Ghana" || "Gambia" || "Guinea" || "Georgia" || "Honduras" ||
        "Iraq" || "Ivory Coast" || "India" || "Indonesia" || "Iran" || "Jamaica" || "Jordan" || "Kazakhstan" || "Kyrgyzstan" || "Laos" || "Liberia" || "Libya" || "Lebanon" || "Lesotho" || "Malaysia" || "Moldova" || "Morocco" ||
        "Madagascar" || "Mongolia" || "Mozambique" || "Malawi" || "Myanmar [Burma]" || "Namibia" || "Nigeria" || "Nepal" || "Nicaragua" || "Niger" || "Oman" || "Russia" || "Qatar" || "Philippines" || "Peru" || "Pakistan" || "Papua New Guinea" ||
        "Singapore" || "South Africa" || "South Sudan" || "Sudan" || "Suriname" || "Swaziland" || "Sierra Leone" || "Thailand" || "Taiwan" || "Trinidad and Tobago" || "Ukraine" || "Uzbekistan" || "Vietnam" || "Tajikistan" || "Togo" || "Zimbabwe" ||
         "Zambia" || "Tanzania" || "Tunisia" || "Turkmenistan" || "Turkey" ) &&
        (currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen")) && <Support />}

{/* Empty Components for Business visa */}

{((destination === "Andorra" || "Antigua and Barbuda" || "Anguilla"||"Albania"||"Antarctica"||
"Austria"||"Aruba"||"Aland"||"American Samoa"||"Angola"||"Argentina"||"Armenia"||
"Bahrain"||"Bosnia and Herzegovina"||"Belgium"||"Bermuda"||"Bonaire"||"Bhutan"||"Bouvet Island"||
"Botswana"||"British India Ocean Territory"||"British Virgin Islands"||"Canada"||"Cocos Island" 
||"Cook Islands" ||"Chile" ||"Colombia" ||"Costa Rica" ||"Cuba" ||"Cape Verde" ||"Curacao" 
||"Christmas Island" ||"Cyprus" ||"Czech Republic" ||"Croatia" ||"Comoros" ||"Cayman Islands" 
||"Denmark" ||"Dominican Republic" ||"Dominica" ||"El Salvador" ||"Estonia" ||"Finland" 
||"Falkland Islands" ||"Faroe Islands" ||"France" ||"French Polynesia" ||"French Southern Territories" 
||"Germany" ||"Grenada" ||"Guernsey" ||"Gibraltar" ||"Greenland" ||"Greece" ||"Guatemala" ||"Guam" 
||"Guinea-Bissau" ||"Guyana" ||"Hong Kong" ||"Heard Island and McDonald Islands" ||"Haiti"||"Hungary"
||"Ireland"||"Israel"||"Isle of Man"||"Iceland"||"Italy"||"Jersey"||"Japan"||"Kenya"||"Kribati"||"Kuwait"
||"Kosovo"||"Liechtenstein"||"Lithuania"||"Luxemberg"||"Latvia"||"Micronesia"||"Monaco"||"Montenegro"
||"Marshall Islands"||"Macao"||"Martinique"||"Mauritania"||"Montserrat"||"Malta"||"Mauritius"||"Maldives"
||"Mexico"||"Mayotte"|| "Samoa" || "Wallis and Futuna" || "Vanuatu" || "Venezuela" || "Saint Vincent and the Grenadines" 
|| "Uruguay" || "Tuvalu"|| "Tonga" || "Tokelau" || "Turks and Caicos" || "Syria" || "Sint Maarten" || "El Salvador" 
|| "Sao Tome and Principe" || "Somalia" || "Senegal" || "San Marino"|| "Slovakia" || "Slovenia" || "Sweden"
 || "Seychelles" || "Solomon Islands" || "Serbia" || "Romania" || "Reunion Island" || "Paraguay" || "Palau Islands" 
 || "Portugal" || "Puerto Rico" || "Saint Pierre and Miquelon" || "Poland" || "French Polynesia" || "Panama" 
 || "New Zealand" || "Niue" || "Nauru" || "Norway" || "Netherlands" || "Norfolk Island" || "New Caledonia" 
 || "Kosovo" || "US Virgin Islands" || "British Virgin Islands" || "Vatican City" || "United States"
  || "US Minor Outlying Islands" || "East Timor" || "French Southern Territories" || "Svalbard and Jan Mayen" 
  || "Saint Helena" || "Palestine" || "Pitcairn Islands") && 
(currentPathlocation==="/visas/business-visa/Non-USCitizens/NonUSCitizen" )) && <Support/>}


{/* Empty Components for official non us Visa */}
{(((destination === "Afghanistan" || "Australia" || "Azerbaijan" || "Belarus" || "Bangladesh" || "Burkina Faso" || "Bahrain" || "Benin" || "Burundi" || "Bolivia" || "Brazil" || "Belarus" || "Central African Republic" || "Ivory Coast" || "Cameroon" || "China" 
|| "Cape Verde" || "Djibouti" || "Eritrea" || "Ethiopia" || "Gabon" || "Ghana" || "Gambia" || "Guinea" || "Indonesia" || "India" || "Iraq" || "Iran" || "Jamaica" || "Jordan" || "Kenya" || "Cambodia" || "Kazakhstan" || "Laos" || "Lebanon" || "Liberia" || "Libya" 
|| "Mali" || "Myanmar" || "Malawi" || "Mozambique" || "Niger" || "Nigeria" || "Nepal" || "Oman" || "Peru" || "Papua New Guinea" || "Philippines" || "Pakistan" || "Qatar" || "Russia" || "Rwanda" || "Saudi Arabia" || "Sierra Leone" || "Suriname" || "South Sudan" || "Chad" 
|| "Togo" || "Thailand" || "Tajikistan" || "Turkmenistan" || "Turkey" || "Taiwan" || "Tanzania" || "Uganda" || "Uzbekistan" || "Vietnam" || "Yemen" || "Zambia" || "Andorra" || "UAE" || "Antigua & Barbuda" || "Anguilla" || "Albania" || "Angola" || "Argentina" || "Austria" || "Aruba" || "Bahamas" || "Bosnia-Herzegovina" || "Belgium" || "Bulgaria" || "Saint Barthelemy" || "Bermuda" || "Brunei" || "Bonaire" 
|| "Bahamas" || "Bhutan" || "Botswana" || "Bouvet Island" || "Botswana" || "Belize"  || "Canada" || "Cocos Island" || "Switzerland" || "Chile" || "Cooks Islands" || "Colombia" || "Costa Rica" || "Cuba" || "Curacao" || "Christmas Island" || "Cyprus" || "Czech Republic" || "Germany" || "Algeria" || "Denmark" || "Dominica" || "Dominican Republic Visa" || "Ecuador" || "Estonia" || "Egypt" || "Western Sahara" || "Spain" || "Finland" || "Fiji" || "Micronesia" || "France" || "United Kingdom" 
|| "Grenada" || "Georgia" || "French Guiana" || "Gibraltar" || "Greenland" || "Guadeloupe" || "Equatorial Guinea" || "Greece" || "Guatemala" || "Guam" || "Guinea-Bissau" || "Guyana" || "Hong Kong" || "Honduras" || "Croatia" || "Haiti" || "Hungary" || "Ireland" || "Israel" || "Iceland" || "Italy" || "Japan" || "Kyrgyzstan" || "Kiribati" || "Saint Kitts and Nevis" || "Kuwait" || "Cayman Islands" || "Saint Lucia" || "Liechtenstein" || "Lesotho" || "Lithuania" || "Luxembourg" || "Latvia" 
|| "Morocco" || "Monaco" || "Moldova" || "Montenegro" || "Saint Martin" || "Madagascar" || "Marshall Islands" || "Mongolia" || "Macau" || "Northern Mariana" || "Martinique" || "Mauritania" || "Montserrat" || "Malta" || "Mauritius" || "Maldives" || "Mexico" || "Namibia" || "New Caledonia" || "Norfolk Island" || "Nicaragua" || "Netherlands" || "Norway" || "Nauru" || "Niue" || "New Zealand" || "Panama" || "French Polynesia" || "Poland" || "Saint Pierre and Miquelon" || "Puerto Rico" || "Portugal" 
|| "Paraguay" || "Reunion Island" || "Romania" || "Serbia" || "Solomon Islands" || "Seychelles" || "Sweden" || "Singapore" || "Slovenia" || "Slovakia" || "San Marino" || "Senegal" || "Sao Tome and Principe" || "El Salvador" || "Sint Maarten" || "Syria" || "Swaziland" || "Turks and Caicos Islands" || "Tokelau" || "Tunisia" || "Tonga" || "Trinidad & Tobago" || "Tuvalu" || "Ukraine" || "Uruguay" || "Saint Vincent and the Grenadines" || "Venezuela" || "Vanuatu" || "Wallis and Futuna" || "Samoa" || "Mayotte" 
|| "South Africa" || "Zimbabwe" || "Malaysia" || "Antarctica" || "American Samoa" || "Aland" || "Barbados" || "Democratic Republic of Congo" || "Republic of Congo" || "Falkland Islands" || "Faroe Islands" || "Guernsey" || "Heard Island and McDonald Islands" || "Isle of Man" || "Jersey" || "Comoros" || "North Korea" || "South Korea" || "North Macedonia" || "Pitcairn Islands" || "Palestine" || "Palau" || "Saint Helena" || "Svalbard and Jan Mayen" || "Somalia" || "French Southern Territories" || "East Timor" 
|| "U.S. Minor Outlying Islands" || "United States" || "Vatican City" || "British Virgin Islands" || "U.S. Virgin Islands" || "Kosovo") && 
(currentPathlocation==="/visas/official-visa/Non-USCitizens/NonUSCitizen" )) && (<Support/>))}
    </div>
  );
};

export default NonUsCitizen