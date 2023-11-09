import React from "react";
import { useLocation } from "react-router-dom";


import "./NonUsCitizen.css";
import BusinessNonUsAfghanistan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Afghanistan";
import BusinessNonUsAzerbaijan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Azerbaijan";
import BusinessNonUsAustralia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Australia";
import BusinessNonUsAlgeria from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Algeria";
import BusinessNonUsBelize from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Belize";
import BusinessNonUsBrazil from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Brazil";
import BusinessNonUsBolivia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Bolivia";

import BusinessNonUsChad from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Chad";
import BusinessNonUsCongo from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Congo";
import BusinessNonUsCentralAfricanRepublic from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_CentralAfricanRepublic";
import BusinessNonUsCameroon from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Cameroon";
import BusinessNonUsChina from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_China";
import BusinessNonUsCambodia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Cambodia";
import BusinessNonUsDijbouti from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Dijbouti";
import BusinessNonUsEthiopia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ethiopia";
import BusinessNonUsEcuador from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ecuador";
import BusinessNonUsEgypt from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Egypt";
import BusinessNonUsEritrea from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Eritrea";
import BusinessNonUsFiji from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Fiji";
import BusinessNonUsGuinea from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Guinea";
import BusinessNonUsGeorgia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Georgia";
import BusinessNonUsGambia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Gambia";
import BusinessNonUsGhana from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Ghana";
import BusinessNonUsGabon from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Gabon";
import BusinessNonUsCongoDemocraticRepublic from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Congo(DemocraticRepublic)";
import BusinessNonUsHonduras from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Honduras";
import BusinessNonUsIran from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Iran";
import BusinessNonUsIndonesia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Indonesia";
import BusinessNonUsIndia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_India";
import BusinessNonUsIvoryCoast from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_IvoryCoast";
import BusinessNonUsIraq from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Iraq";
import BusinessNonUsJordan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Jordon";
import BusinessNonUsJamaica from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Jamaica";
import BusinessNonUsKyrgyzstan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Kyrgyzstan";
import BusinessNonUsKoreaSouth from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_KoreaSouth";
import BusinessNonUsKazakhstan from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_kazakhstan";
import BusinessNonUsLesotho from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Lesotho";
import BusinessNonUsLebanon from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Lebanon";
import BusinessNonUsLibya from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Libya";
import BusinessNonUsLiberia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Liberia";
import BusinessNonUsLaos from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Laos";
import BusinessNonUsMyanmar from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Myanmar";
import BusinessNonUsMalawi from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Malawi";
import BusinessNonUsMozambique from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Mozambique";
import BusinessNonUsMongolia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Mongolia";
import BusinessNonUsMali from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Mali";
import BusinessNonUsMadagascar from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Madagascar";
import BusinessNonUsMorocco from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Morocco";
import BusinessNonUsMoldova from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Moldova";
import BusinessNonUsMalaysia from "../../Components/Business_visa/Business_NonUs_Visa/Business_NonUs_Malaysia";

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
      

      {(destination === "Afghanistan" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && ( <BusinessNonUsAfghanistan /> )}
      {(destination === "Azerbaijan" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")  && (<BusinessNonUsAzerbaijan />)}
      {(destination === "Australia" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")  && (<BusinessNonUsAustralia />)}
      {(destination === "Algeria" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")  && (<BusinessNonUsAlgeria />)}
      {(destination === "Belize"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsBelize />)}
      {(destination === "Brazil"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsBrazil />)}
      {(destination === "Bolivia" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsBolivia />)}
      {(destination === "Democratic Republic of the Congo" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsCongoDemocraticRepublic/>)}
      {(destination === "Chad" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsChad />)}
      {(destination === "Republic of the Congo" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsCongo />)}
      {(destination === "Central African Republic" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsCentralAfricanRepublic />)}
      {(destination === "Cameroon" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsCameroon />)}
      {(destination === "China" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsChina />)}\
      {(destination === "Cambodia" && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen")&& (<BusinessNonUsCambodia />)}
      {(destination === "Djibouti"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsDijbouti/>)}
      {(destination === "Ethiopia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsEthiopia/>)}
      {(destination === "Ecuador"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsEcuador/>)}
      {(destination === "Egypt"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsEgypt/>)}
      {(destination === "Eritrea"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsEritrea/>)}
      {(destination === "Fiji"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsFiji/>)}
      {(destination === "Guinea"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsGuinea/>)}
      {(destination === "Georgia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsGeorgia/>)}
      {(destination === "Gambia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsGambia/>)}
      {(destination === "Ghana"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsGhana/>)}
      {(destination === "Gabon"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsGabon/>)}
      {(destination === "Honduras"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsHonduras/>)}
      {(destination === "Iran"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsIran/>)}
      {(destination === "Indonesia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsIndonesia/>)}
      {(destination === "India"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsIndia/>)}
      {(destination === "Ivory Coast"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsIvoryCoast/>)}
      {(destination === "Iraq"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsIraq/>)}
      {(destination === "Jordan"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsJordan/>)}
      {(destination === "Jamaica"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsJamaica/>)}
      {(destination === "Kyrgyzstan"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsKyrgyzstan/>)}
      {(destination === "South Korea"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsKoreaSouth/>)}
      {(destination === "Kazakhstan"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsKazakhstan/>)}
      {(destination === "Lesotho"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsLesotho/>)}
      {(destination === "Lebanon"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsLebanon/>)}
      {(destination === "Libya"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsLibya/>)}
      {(destination === "Liberia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsLiberia/>)}
      {(destination === "Laos"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsLaos/>)}
      {(destination === "Myanmar [Burma]"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMyanmar/>)}
      {(destination === "Malawi"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMalawi/>)}
      {(destination === "Mozambique"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMozambique/>)}
      {(destination === "Mongolia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMongolia/>)}
      {(destination === "Mali"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMali/>)}
      {(destination === "Madagascar"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMadagascar/>)}
      {(destination === "Morocco"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMorocco/>)}
      {(destination === "Moldova"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMoldova/>)}
      {(destination === "Malaysia"  && currentPathlocation ==="/visas/business-visa/Non-USCitizens/NonUSCitizen") && (<BusinessNonUsMalaysia/>)}







      
      
      </div>
  );
};

export default NonUsCitizen;
