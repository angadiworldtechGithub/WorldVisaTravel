import React from "react";
import { useLocation } from "react-router-dom";

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
import OfficialUsMadagascar from "../../Components/Official_visa/Official_us_visa/Official_Us_Madagascar";
import OfficialUsMalawi from "../../Components/Official_visa/Official_us_visa/Official_Us_Malawi";
import OfficialUsMali from "../../Components/Official_visa/Official_us_visa/Official_Us_Mali";
import OfficialUsMauritania from "../../Components/Official_visa/Official_us_visa/Official_Us_Mauritania";
import OfficialUsMongolia from "../../Components/Official_visa/Official_us_visa/Official_Us_Mongolia";
import OfficialUsMozambique from "../../Components/Official_visa/Official_us_visa/Official_Us_Mozambique";
import OfficialUsMyanmar from "../../Components/Official_visa/Official_us_visa/Official_Us_Myanmar";
import OfficialUsNigeria from "../../Components/Official_visa/Official_us_visa/Official_Us_Nigeria";
import OfficialUsNamibia from "../../Components/Official_visa/Official_us_visa/Official_Us_Namibia";
import OfficialUsNepal from "../../Components/Official_visa/Official_us_visa/Official_Us_Nepal";
import OfficialUsNiger from "../../Components/Official_visa/Official_us_visa/Official_Us_Niger";
import OfficialUsOman from "../../Components/Official_visa/Official_us_visa/Official_Us_Oman";
import OfficialUsPhilippines from "../../Components/Official_visa/Official_us_visa/Official_Us_Philippines";
import OfficialUsPeru from "../../Components/Official_visa/Official_us_visa/Official_Us_Peru";
import OfficialUsParaguay from "../../Components/Official_visa/Official_us_visa/Official_Us_Paraguay";
import OfficialUsPakistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Pakistan";
import OfficialUsSpain from "../../Components/Official_visa/Official_us_visa/Official_Us_Spain";
import OfficialUsSuriname from "../../Components/Official_visa/Official_us_visa/Official_Us_Suriname";
import OfficialUsSouthSudan from "../../Components/Official_visa/Official_us_visa/Official_Us_SouthSudan";
import OfficialUsSierraLeone from "../../Components/Official_visa/Official_us_visa/Official_Us_SierraLeone";
import OfficialUsSudan from "../../Components/Official_visa/Official_us_visa/Official_Us_Sudan";
import OfficialUsSouthAfrica from "../../Components/Official_visa/Official_us_visa/Official_Us_SouthAfrica";
import OfficialUsSaudiArabia from "../../Components/Official_visa/Official_us_visa/Official_Us_SaudiArabia";
import OfficialUsQatar from "../../Components/Official_visa/Official_us_visa/Official_Us_Qatar";
import OfficialUsRussia from "../../Components/Official_visa/Official_us_visa/Official_Us_Russia";
import OfficialUsSriLanka from "../../Components/Official_visa/Official_us_visa/Official_Us_SriLanka";
import OfficialUsTajikistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Tajikistan";
import OfficialUsTanzania from "../../Components/Official_visa/Official_us_visa/Official_Us_Tanzania";
import OfficialUsThailand from "../../Components/Official_visa/Official_us_visa/Official_Us_Thailand";
import OfficialUsTurkey from "../../Components/Official_visa/Official_us_visa/Official_Us_Turkey";
import OfficialUsTurkmenistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Turkmenistan";
import OfficialUsTogo from "../../Components/Official_visa/Official_us_visa/Official_Us_Togo";
import OfficialUsTrinidadAndTobago from "../../Components/Official_visa/Official_us_visa/Official_Us_TrinidadAndTobago";
import OfficialUsUruguay from "../../Components/Official_visa/Official_us_visa/Official_Us_Uruguay";
import OfficialUsUzbekistan from "../../Components/Official_visa/Official_us_visa/Official_Us_Uzbekistan";
import OfficialUsVietnam from "../../Components/Official_visa/Official_us_visa/Official_Us_Vietnam";
import OfficialUsYemen from "../../Components/Official_visa/Official_us_visa/Official_Us_Yemen";
import OfficialUsZambia from "../../Components/Official_visa/Official_us_visa/Official_Us_Zambia";
import OfficialUsZimbabwe from "../../Components/Official_visa/Official_us_visa/Official_Us_Zimbabwe";

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
      {(destination === "Afghanistan"  && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsAfghanistan />) }
      {(destination === "United Arab Emirates"  && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsUnitedArabEmirates />)}
      {(destination === "American Samoa" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsAmericanSamoa />)}
      {(destination === "Argentina" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsArgentina />)}
      {(destination === "Angola" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsAngola />)}
      {(destination === "Armenia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&& (<OfficialUsArmenia />)}
      {(destination === "Azerbaijan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &(<OfficialUsAzerbaijan />)}
      {(destination === "Algeria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsAlgeria />)}
      {(destination === "Australia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsAustralia />)}
      {(destination === "Belarus" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsBelarus />)}
      {(destination === "Brunei" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsBrunei />)}
      {(destination === "Bahrain" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsBahrain />)}
      {(destination === "Bulgaria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsBulgaria />)}
      {(destination === "Bangladesh" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsBangladesh />)}
      {(destination === "Bolivia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsBolivia />)}
      {(destination === "Brazil" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsBrazil />)}
      {(destination === "Burkina Faso" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsBurkinaFaso />)}
      {(destination === "Benin" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsBenin />)}
      {(destination === "Burundi" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsBurundi />)}
      {(destination === "Cambodia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsCambodia />)}
      {(destination === "China" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsChina />)}
      {(destination === "Chile" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsChile />)}
      {(destination === "Cape Verde" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsCapeVerde />)}
      {(destination === "Democratic Republic of the Congo" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && ( (<OfficialUsDemocraticRepCongo />) )}
      {(destination === "Ivory Coast" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsIvoryCoast />)}
      {(destination === "Republic of the Congo" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsCongo />)}
      {(destination === "Central African Republic" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&& (  (<OfficialUsCentralAfricanRepublic />))}
      {(destination === "Cameroon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsCameroon />)}
      {(destination === "Djibouti" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsDjibouti />)}
      {(destination === "Dominican Republic" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsDominicanRepublic />)}
      {(destination === "Ecuador" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsEcuador />)}
      {(destination === "Eritrea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsEritrea />)}
      {(destination === "Egypt" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsEgypt />)}
      {(destination === "Ethiopia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsEthiopia />)}
      {(destination === "France" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsFrance />)}
      {(destination === "Gabon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsGabon />)}
      {(destination === "Ghana" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") &&  (<OfficialUsGhana />)}
      {(destination === "Gambia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsGambia />)}
      {(destination === "Guinea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsGuinea />)}
      {(destination === "Greece" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsGreece />)}
      {(destination === "Guinea-Bissau" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen")&&  (<OfficialUsGuineaBissau />)}

      {(destination === "Haiti" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsHaiti />)}

      {(destination === "Israel" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsIsrael />)}
      {(destination === "India" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsIndia />)}
      {(destination === "Indonesia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsIndonesia />)}
      {(destination === "Iraq" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsIraq />)}

      {(destination === "Japan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsJapan />)}
      {(destination === "Jamaica" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsJamaica />)}
      {(destination === "Jordon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsJordon />)}

      {(destination === "Kazakhstan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsKazakhstan />)}
      {(destination === "Kenya" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsKenya />)}
      {(destination === "South Korea" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsKoreaSouth />)}
      {(destination === "Kuwait" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsKuwait />)}
      {(destination === "Kyrgyzstan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsKyrgyzstan />)}

      {(destination === "Laos" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsLaos />)}
      {(destination === "Liberia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsLiberia />)}
      {(destination === "Libya" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsLibya />)}
      {(destination === "Lebanon" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsLebanon />)}

      {(destination === "Madagascar" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMadagascar />)}
      {(destination === "Malawi" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMalawi />)}
      {(destination === "Mali" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMali />)}
      {(destination === "Mauritania" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMauritania />)}
      {(destination === "Mongolia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMongolia />)}
      {(destination === "Mozambique" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMozambique />)}
      {(destination === "Myanmar" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsMyanmar />)}

      {(destination === "Nigeria" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsNigeria />)}
      {(destination === "Namibia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsNamibia />)}
      {(destination === "Nepal" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsNepal />)}
      {(destination === "Niger" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsNiger />)}

      {(destination === "Oman" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsOman />)}

      {(destination === "Philippines" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsPhilippines />)}
      {(destination === "Peru" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsPeru />)}
      {(destination === "Paraguay" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsParaguay />)}
      {(destination === "Pakistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsPakistan />)}
      {(destination === "Qatar" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsQatar />)}

      {(destination === "Russia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsRussia />)}

      {(destination === "Sri Lanka" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSriLanka />)}
      {(destination === "Spain" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSpain />)}
      {(destination === "Suriname" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSuriname />)}
      {(destination === "South Sudan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSouthSudan />)}
      {(destination === "Sierra Leone" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSierraLeone />)}
      {(destination === "Sudan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSudan />)}
      {(destination === "South Africa" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSouthAfrica />)}
      {(destination === "Saudi Arabia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsSaudiArabia />)}

      {(destination === "Tajikistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsTajikistan />)}
      {(destination === "Tanzania" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsTanzania />)}
      {(destination === "Thailand" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsThailand />)}
      {(destination === "Turkey" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsTurkey />)}
      {(destination === "Turkmenistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsTurkmenistan />)}
      {(destination === "Togo" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsTogo />)}
      {(destination === "Trinidad and Tobago" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsTrinidadAndTobago />)}

      {(destination === "Uruguay" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsUruguay />)}
      {(destination === "Uzbekistan" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsUzbekistan />)}
      {(destination === "Vietnam" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsVietnam />)}
      {(destination === "Yemen" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsYemen />)}
      {(destination === "Zambia" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsZambia />)}
      {(destination === "Zimbabwe" && currentPathlocations ==="/visas/official-visa/USCitizens/USCitizen") && (<OfficialUsZimbabwe />)}
    </div>
  );
}

export default USCitizen;
