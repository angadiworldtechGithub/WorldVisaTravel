import React from "react";
import { useLocation } from "react-router-dom";
import Canada from "../../Components/Canada/Canada";
import India from "../../Components/India/India";
import "./USCitizen.css";

import OfficialUsAfghanistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Afghanistan";
import OfficialUsUnitedArabEmirates from "../../Components/Official_visa/Official_us_visa/Official_Us_UnitedArabEmirates";

import OfficialUsArgentina from "../../Components/Official_visa/Official_us_visa/Official_Us_Argentina";
import OfficialUsAngola from "../../Components/Official_visa/Official_us_visa/Official_Us_Angola";
import OfficialUsArmenia from "../../Components/Official_visa/Official_us_visa/Official_Us_Armenia";
import OfficialUsAzerbaijan from "../../Components/Official_visa/Official_us_visa/Official_Us_Azerbaijan";
import OfficialUsAlgeria from "../../Components/Official_visa/Official_us_visa/Official_Us_Algeria";
import OfficialUsAmericanSamoa from "../../Components/Official_visa/Official_us_visa/Official_Us_AmericanSamoa";
import OfficialUsAustralia from "../../Components/Official_visa/Official_us_visa/Official_Us_Australia";
import OfficialUsBelarus from "../../Components/Official_visa/Official_us_visa/Official_Us_Belarus";
import OfficialUsBrunei from "../../Components/Official_visa/Official_us_visa/Official_Us_Brunei";
import OfficialUsBahrain from "../../Components/Official_visa/Official_us_visa/Official_Us_Bahrain";
import OfficialUsBulgaria from "../../Components/Official_visa/Official_us_visa/Official_Us_Bulgaria";
import OfficialUsBangladesh from "../../Components/Official_visa/Official_us_visa/Official_Us_Bangladesh";
import OfficialUsBolivia from "../../Components/Official_visa/Official_us_visa/Official_Us_Bolivia";
import OfficialUsBrazil from "../../Components/Official_visa/Official_us_visa/Official_Us_Brazil";
import OfficialUsBurkinaFaso from "../../Components/Official_visa/Official_us_visa/Official_Us_BurkinaFaso";
import OfficialUsBenin from "../../Components/Official_visa/Official_us_visa/Official_Us_Benin";
import OfficialUsBurundi from "../../Components/Official_visa/Official_us_visa/Official_Us_Burundi";
import OfficialUsChina from "../../Components/Official_visa/Official_us_visa/Official_Us_China";
import OfficialUsCambodia from "../../Components/Official_visa/Official_us_visa/Official_Us_Cambodia";
import OfficialUsChile from "../../Components/Official_visa/Official_us_visa/Official_Us_Chile";
import OfficialUsCapeVerde from "../../Components/Official_visa/Official_us_visa/Official_Us_CapeVerde";
import OfficialUsDemocraticRepCongo from "../../Components/Official_visa/Official_us_visa/Official_Us_DemocraticRepCongo";
import OfficialUsIvoryCoast from "../../Components/Official_visa/Official_us_visa/Official_Us_IvoryCoast";
import OfficialUsCongo from "../../Components/Official_visa/Official_us_visa/Official_Us_Congo";
import OfficialUsCentralAfricanRepublic from "../../Components/Official_visa/Official_us_visa/Official_Us_CentralAfricanRepublic";
import OfficialUsCameroon from "../../Components/Official_visa/Official_us_visa/Official_Us_Cameroon";
import OfficialUsDjibouti from "../../Components/Official_visa/Official_us_visa/Official_Us_Djibouti";
import OfficialUsDominicanRepublic from "../../Components/Official_visa/Official_us_visa/Official_Us_DominicanRepublic";
import OfficialUsEcuador from "../../Components/Official_visa/Official_us_visa/Official_Us_Ecuador";
import OfficialUsEritrea from "../../Components/Official_visa/Official_us_visa/Official_Us_Eritrea";
import OfficialUsEgypt from "../../Components/Official_visa/Official_us_visa/Official_Us_Egypt";
import OfficialUsEthiopia from "../../Components/Official_visa/Official_us_visa/Official_Us_Ethiopia";
import OfficialUsFrance from "../../Components/Official_visa/Official_us_visa/Official_Us_France";
import OfficialUsGabon from "../../Components/Official_visa/Official_us_visa/Official_Us_Gabon";
import OfficialUsGhana from "../../Components/Official_visa/Official_us_visa/Official_Us_Ghana";
import OfficialUsGambia from "../../Components/Official_visa/Official_us_visa/Official_Us_Gambia";
import OfficialUsGuinea from "../../Components/Official_visa/Official_us_visa/Official_Us_Guinea";
import OfficialUsGreece from "../../Components/Official_visa/Official_us_visa/Official_Us_Greece";
import OfficialUsGuineaBissau from "../../Components/Official_visa/Official_us_visa/Official_Us_GuineaBissau";
import OfficialUsHaiti from "../../Components/Official_visa/Official_us_visa/Official_Us_Haiti";
import OfficialUsIsrael from "../../Components/Official_visa/Official_us_visa/Official_Us_Israel";
import OfficialUsIndia from "../../Components/Official_visa/Official_us_visa/Official_Us_India";
import OfficialUsIndonesia from "../../Components/Official_visa/Official_us_visa/Official_Us_Indonesia";
import OfficialUsIraq from "../../Components/Official_visa/Official_us_visa/Official_Us_Iraq";
import OfficialUsJapan from "../../Components/Official_visa/Official_us_visa/Official_Us_Japan";
import OfficialUsJordon from "../../Components/Official_visa/Official_us_visa/Official_Us_Jordon";
import OfficialUsJamaica from "../../Components/Official_visa/Official_us_visa/Official_Us_Jamaica";
import OfficialUsKazakhstan from "../../Components/Official_visa/Official_us_visa/Official_Us_Kazakhstan";
import OfficialUsKenya from "../../Components/Official_visa/Official_us_visa/Official_Us_Kenya";
import OfficialUsKoreaSouth from "../../Components/Official_visa/Official_us_visa/Official_Us_KoreaSouth";
import OfficialUsKuwait from "../../Components/Official_visa/Official_us_visa/Official_Us_Kuwait";
import OfficialUsKyrgyzstan from "../../Components/Official_visa/Official_us_visa/Official_Us_Kyrgyzstan";
import OfficialUsLaos from "../../Components/Official_visa/Official_us_visa/Official_Us_Laos";
import OfficialUsLiberia from "../../Components/Official_visa/Official_us_visa/Official_Us_Liberia";
import OfficialUsLibya from "../../Components/Official_visa/Official_us_visa/Official_Us_Libya";
import OfficialUsLebanon from "../../Components/Official_visa/Official_us_visa/Official_Us_Lebanon";

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

      {destination === "Afghanistan" && <OfficialUsAfghanistan />}
      {destination === "United Arab Emirates" && (
        <OfficialUsUnitedArabEmirates />
      )}
      {destination === "American Samoa" && <OfficialUsAmericanSamoa />}

      {destination === "Argentina" && <OfficialUsArgentina />}

      {destination === "Angola" && <OfficialUsAngola />}
      {destination === "Armenia" && <OfficialUsArmenia />}
      {destination === "Azerbaijan" && <OfficialUsAzerbaijan />}
      {destination === "Algeria" && <OfficialUsAlgeria />}
      {destination === "Australia" && <OfficialUsAustralia />}
      {destination === "Belarus" && <OfficialUsBelarus />}
      {destination === "Brunei" && <OfficialUsBrunei />}
      {destination === "Bahrain" && <OfficialUsBahrain />}
      {destination === "Bulgaria" && <OfficialUsBulgaria />}
      {destination === "Bangladesh" && <OfficialUsBangladesh />}
      {destination === "Bolivia" && <OfficialUsBolivia />}
      {destination === "Brazil" && <OfficialUsBrazil />}
      {destination === "Burkina Faso" && <OfficialUsBurkinaFaso />}
      {destination === "Benin" && <OfficialUsBenin />}
      {destination === "Burundi" && <OfficialUsBurundi />}
      {destination === "Cambodia" && <OfficialUsCambodia/>}
      {destination === "China" && <OfficialUsChina/>}
      {destination === "Chile" && <OfficialUsChile/>}
      {destination === "Cape Verde" && <OfficialUsCapeVerde/>}
      {destination === "Democratic Republic of the Congo" && <OfficialUsDemocraticRepCongo/>}
      {destination === "Ivory Coast" && <OfficialUsIvoryCoast/>}
      {destination === "Republic of the Congo" && <OfficialUsCongo/>}
      {destination === "Central African Republic" && <OfficialUsCentralAfricanRepublic/>}
      {destination === "Cameroon" && <OfficialUsCameroon/>}
      {destination === "Djibouti" && <OfficialUsDjibouti/>}
      {destination === "Dominican Republic" && <OfficialUsDominicanRepublic/>}
      {destination === "Ecuador" && <OfficialUsEcuador/>}
      {destination === "Eritrea" && <OfficialUsEritrea/>}
      {destination === "Egypt" && <OfficialUsEgypt/>}
      {destination === "Ethiopia" && <OfficialUsEthiopia/>}
      {destination === "France" && <OfficialUsFrance/>}
      {destination === "Gabon" && <OfficialUsGabon/>}
      {destination === "Ghana" && <OfficialUsGhana/>}
      {destination === "Gambia" && <OfficialUsGambia/>}
      {destination === "Guinea" && <OfficialUsGuinea/>}
      {destination === "Greece" && <OfficialUsGreece/>}
      {destination === "Guinea-Bissau" && <OfficialUsGuineaBissau/>}
      {destination === "Haiti" && <OfficialUsHaiti/>}
      {destination === "Israel" && <OfficialUsIsrael/>}
      {destination === "India" && <OfficialUsIndia/>}
      {destination === "Indonesia" && <OfficialUsIndonesia/>}
      {destination === "Iraq" && <OfficialUsIraq/>}
      {destination === "Japan" && <OfficialUsJapan/>}
      {destination === "Jamaica" && <OfficialUsJamaica/>}
      {destination === "Jordon" && <OfficialUsJordon/>}
      {destination === "Kazakhstan" && <OfficialUsKazakhstan/>}
      {destination === "Kenya" && <OfficialUsKenya/>}
      {destination === "South Korea" && <OfficialUsKoreaSouth/>}
      {destination === "Kuwait" && <OfficialUsKuwait/>}
      {destination === "Kyrgyzstan" && <OfficialUsKyrgyzstan/>}
      {destination === "Laos" && <OfficialUsLaos/>}
      {destination === "Liberia" && <OfficialUsLiberia/>}
      {destination === "Libya" && <OfficialUsLibya/>}
      {destination === "Lebanon" && <OfficialUsLebanon/>}
      
      
      




    </div>
  );
}

export default USCitizen;
