import React from "react";
import { useLocation } from "react-router-dom";
import "../USCitizen.css";
import Support from "../../../Support/Support";

import E_Us_Businessvisa_Benin from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Benin';
import E_Us_Businessvisa_Ethiopia from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Ethiopia';
import E_Us_Businessvisa_Korea from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Korea';
import E_Us_Businessvisa_Kuwait from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Kuwait';
import E_Us_Businessvisa_Mozambique from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Mozambique';
import E_Us_Businessvisa_Srilanka from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Srilanka';
import E_Us_Businessvisa_Thailand from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Thailand';
import E_Us_Businessvisa_Unitedarab from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Unitedarab';
import E_Us_Businessvisa_Zambia from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Zambia';
import E_Us_Businessvisa_Rwanda from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Rwanda';
import E_Us_Businessvisa_Oman from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Oman';
import E_Us_Businessvisa_Loas from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Loas';
import E_Us_Businessvisa_Kyrgyzstan from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Business/E_Us_Businessvisa_Kyrgyzstan';

import E_Us_Touristvisa_Benin from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Benin';
import E_Us_Touristvisa_Ethiopia from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Ethiopia';
import E_Us_Touristvisa_Korea from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Korea';
import E_Us_Touristvisa_Kuwait from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Kuwait';
import E_Us_Touristvisa_Mozambique from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Mozambique';
import E_Us_Touristvisa_Srilanka from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Srilanka';
import E_Us_Touristvisa_Thailand from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Thailand';
import E_Us_Touristvisa_Unitedarab from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Unitedarab';
import E_Us_Touristvisa_Zambia from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Zambia';
import E_Us_Touristvisa_Rwanda from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Rwanda';
import E_Us_Touristvisa_Oman from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Oman';
import E_Us_Touristvisa_Loas from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Loas';
import E_Us_Touristvisa_Cambodia from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Cambodia';
import E_Us_Touristvisa_Kyrgyzstan from '../../../Components/E_visa/E_Us_visa/E_Us_visa_Tourist/E_Us_Touristvisa_Kyrgyzstan';

function UsCitizenE_Visa() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  
     // Access the current path
     const currentPathlocations = location.pathname;
     console.log(currentPathlocations)
  
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

{/* Tourist_E-Visa */}

{(destination === "Benin" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Benin/>)}
{(destination === "Cambodia" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Cambodia/>)}
{(destination === "Ethiopia" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Ethiopia/>)}
{(destination === "North Korea" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Korea/>)}
{(destination === "Kuwait" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Kuwait/>)}
{(destination === "Kyrgyzstan" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Kyrgyzstan/>)}
{(destination === "Laos" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Loas/>)}
{(destination === "Mozambique" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Mozambique/>)}
{(destination === "Oman" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Oman/>)}
{(destination === "Rwanda" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Rwanda/>)}
{(destination === "Sri Lankan" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Srilanka/>)}
{(destination === "Thailand" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Thailand/>)}
{(destination === "united arab emirates" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Unitedarab/>)}
{(destination === "Zambia" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen") && (<E_Us_Touristvisa_Zambia/>)}


{/* Business_E-Visa */}
{(destination === "Benin" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Benin/>)}
{(destination === "Ethiopia" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Ethiopia/>)}
{(destination === "North Korea" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Korea/>)}
{(destination === "Kuwait" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Kuwait/>)}
{(destination === "Kyrgyzstan" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Kyrgyzstan/>)}
{(destination === "Laos" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Loas/>)}
{(destination === "Mozambique" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Mozambique/>)}
{(destination === "Oman" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Oman/>)}
{(destination === "Rwanda" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Rwanda/>)}
{(destination === "Sri Lankan" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Srilanka/>)}
{(destination === "Thailand" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Thailand/>)}
{(destination === "united arab emirates" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Unitedarab/>)}
{(destination === "Zambia" && currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen") && (<E_Us_Businessvisa_Zambia/>)}


{(((destination !== "Benin"||"Cambodia"||"North Korea"||"Kuwait"||"Kyrgyzstan"||"Laos"||"Mozambique"||"Oman"||"Rwanda"||"Sri Lankan"||"Thailand"||"united arab emirates"||"Zambia") &&
(currentPathlocations === "/visas/e-visa/Business_e-visa/USCitizens/USCitizen")) &&
(<Support />))}

{(((destination !== "Benin"||"Cambodia"||"North Korea"||"Kuwait"||"Kyrgyzstan"||"Laos"||"Mozambique"||"Oman"||"Rwanda"||"Sri Lankan"||"Thailand"||"united arab emirates"||"Zambia") &&
(currentPathlocations === "/visas/e-visa/Tourist_e-visa/USCitizens/USCitizen")) &&
(<Support />))}
        </div>
  );
}

export default UsCitizenE_Visa;