import React from 'react'
import { useLocation } from 'react-router-dom';
import "./NonUsCitizen.css";



import Business_NonUs_SouthAfrica from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_SouthAfrica"
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
    const country = searchParams.get('country');
    const destination = searchParams.get('destination');

 // Access the current path
 const currentPathlocation = location.pathname;
 console.log(currentPathlocation);

 console.log("COuntry", country && country);
  return (
    <div className='NonUs-citizen'>
     <center><h2 className="NonUs-citizen-Header">Non-US Citizens</h2></center>
     <center><h3 className="NonUs-citizen-country">{destination && destination}</h3></center>
       

 {/*business visas*/}

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






    </div>
  );
};

export default NonUsCitizen