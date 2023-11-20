import React from "react";
import { useLocation } from "react-router-dom";
import Support from "../../Support/Support";


import "./NonUsCitizen.css";
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

const NonUsCitizen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");
  const destination = searchParams.get("destination");

  // Access the current path
  const currentPathlocation = location.pathname;
  console.log(currentPathlocation);

  console.log("COuntry", country && country);

  return (
    <div className="NonUs-citizen">
      <center>
        <h2 className="NonUs-citizen-Header">Non-US Citizens</h2>
      </center>
      <center>
        <h3 className="NonUs-citizen-country">{destination && destination}</h3>
      </center>
      

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




          {/* Empty Components for Business visa */}

      {((destination === "Andorra" || "Antigua and Barbuda" || "Anguilla"||"Albania"||"Antarctica"||
      "Austria"||"Aruba"||"Aland"||"American Samoa"||"Angola"||"Argentina"||"Armenia"||
      "Bahrain"||"Bosnia and Herzegovina"||"Belgium"||"Bermuda"||"Bonaire"||"Bhutan"||"Bouvet Island"||
      "Botswana"||"British India Ocean Territory"||"British Virgin Islands"||"Canada"||"Cocos Island" 
      ||"Cook Islands" ||"Chile" ||"Colombia" ||"Costa Rica" ||"Cuba" ||"Cape Verde" ||"Curacao" 
      ||"Christmas Island" ||"Cyprus" ||"Czech Republic" ||"Croatia" ||"Comoros" ||"Cayman Islands" 
      ||"Denmark" ||"Dominican Republic" ||"Dominica" ||"El Salvador" ||"Estonia" ||"Finland" 
      ||"Falkland Islands" ||"Faroe Islands" ||"France"|"French Guinea"||"French Polynesia" ||"French Southern Territories" 
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

      {/* Empty Components for Tourist Visa */}

      {((destination === "" || "" || "") && 
      (currentPathlocation==="/visas/tourist-visa/Non-USCitizens/NonUsCitizen" )) && <Support/>}


      
      
      </div>
  );
};

export default NonUsCitizen;
