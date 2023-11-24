import React from 'react'
import { useLocation } from 'react-router-dom';
import "../NonUsCitizen.css";
import Support from '../../../Support/Support';
import E_NonUs_Businessvisa_Benin from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Benin';

import E_NonUs_Businessvisa_Kuwait from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Kuwait';
import E_NonUs_Businessvisa_Mozambique from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Mozambique';
import E_NonUs_Businessvisa_Srilanka from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Srilanka';
import E_NonUs_Businessvisa_Thailand from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Thailand';
import E_NonUs_Businessvisa_Unitedarab from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Unitedarab';
import E_NonUs_Businessvisa_Zambia from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Zambia';
import E_NonUs_Businessvisa_Rwanda from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Business/E_NonUs_Businessvisa_Rwanda';

import E_NonUs_Touristvisa_Benin from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Benin';
import E_NonUs_Touristvisa_Ethiopia from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Ethiopia';
import E_NonUs_Touristvisa_Korea from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Korea';
import E_NonUs_Touristvisa_Kuwait from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Kuwait';
import E_NonUs_Touristvisa_Mozambique from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Mozambique';
import E_NonUs_Touristvisa_Srilanka from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Srilanka';
import E_NonUs_Touristvisa_Thailand from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Thailand';
import E_NonUs_Touristvisa_Unitedarab from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Unitedarab';
import E_NonUs_Touristvisa_Zambia from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Zambia';
import E_NonUs_Touristvisa_Rwanda from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Rwanda';
import E_NonUs_Touristvisa_Oman from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Oman';
import E_NonUs_Touristvisa_Loas from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Loas';
import E_NonUs_Touristvisa_Cambodia from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Cambodia';
import E_NonUs_Touristvisa_Kyrgyzstan from '../../../Components/E_visa/E_NonUs_visa/E_NonUs_visa_Tourist/E_NonUs_Touristvisa_Kyrgyzstan';

const NonUsCitizenE_Visa = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);

    // Access the current path
    const currentPathlocations = location.pathname;
    console.log(currentPathlocations)

    const country = searchParams.get('country'); 
    const destination = searchParams.get('destination');
    

  console.log("Country", country && country);

  return (
<div className='NonUs-citizen'>
<center>
<h2 className="Us-citizen-Header">Non-US Citizens</h2>
</center>
<center>
<h3 className="Us-citizen-country">{destination && destination}</h3>
</center>     


{/* Business_E-Visa */}
{(destination === "Benin" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Benin/>)}

{(destination === "Kuwait" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Kuwait/>)}

{(destination === "Mozambique" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Mozambique/>)}

{(destination === "Rwanda" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Rwanda/>)}
{(destination === "Sri Lankan" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Srilanka/>)}
{(destination === "Thailand" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Thailand/>)}
{(destination === "united arab emirates" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Unitedarab/>)}
{(destination === "Zambia" && currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Businessvisa_Zambia/>)}
  

{/* Tourist E-visa */}

    {(destination === "Benin" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Benin/>)}
    {(destination === "Cambodia" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Cambodia/>)}
    {(destination === "Ethiopia" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Ethiopia/>)}
    {(destination === "North Korea" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Korea/>)}
    {(destination === "Kuwait" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Kuwait/>)}
    {(destination === "Kyrgyzstan" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Kyrgyzstan/>)}
    {(destination === "Laos" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Loas/>)}
    {(destination === "Mozambique" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Mozambique/>)}
    {(destination === "Oman" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Oman/>)}
    {(destination === "Rwanda" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Rwanda/>)}
    {(destination === "Sri Lankan" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Srilanka/>)}
    {(destination === "Thailand" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Thailand/>)}
    {(destination === "united arab emirates" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Unitedarab/>)}
    {(destination === "Zambia" && currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen") && (<E_NonUs_Touristvisa_Zambia/>)}
    
{/* Empty Components for Business Visa */}
{(((destination !== "Benin"||"Cambodia"||"North Korea"||"Kuwait"||"Kyrgyzstan"||"Laos"||"Mozambique"||"Oman"||"Rwanda"||"Sri Lankan"||"Thailand"||"united arab emirates"||"Zambia") &&
(currentPathlocations === "/visas/e-visa/Business_e-visa/Non-USCitizens/NonUSCitizen")) &&
(<Support />))}

{(((destination !== "Benin"||"Cambodia"||"North Korea"||"Kuwait"||"Kyrgyzstan"||"Laos"||"Mozambique"||"Oman"||"Rwanda"||"Sri Lankan"||"Thailand"||"united arab emirates"||"Zambia") &&
(currentPathlocations === "/visas/e-visa/Tourist_e-visa/Non-USCitizens/NonUSCitizen")) &&
(<Support />))}
  </div>
  );
};

export default NonUsCitizenE_Visa;