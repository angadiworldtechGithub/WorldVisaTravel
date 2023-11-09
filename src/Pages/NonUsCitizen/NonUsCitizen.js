import React from 'react'
import { useLocation } from 'react-router-dom';
import Canada from '../../Components/Canada/Canada';
import "./NonUsCitizen.css";
import Afghanistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Afghanistan';
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
       {destination === "Canada" && <Canada />}
       

{/* Tourist_visas */}

    {(destination === "Afghanistan" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Afghanistan />)}
    {(destination === "Belarus" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<BelarusTouristNonUs/>)}
    {(destination === "Belize" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Belize/>)}
    {(destination === "Brunei" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Brunei/>)}
    {(destination === "Bahamas" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") && (<Tourist_nonUs_Bahamas/>)}
    {(destination === "Botswana" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Botswana/>)}
    {(destination === "Bulgaria" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Bulgaria/>)}
    {(destination === "Bangladesh" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Bangladesh/>)}
    {(destination === "Bolivia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Bolivia/>)}
    {(destination === "Brazil" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Brazil/>)}
    {(destination === "Burkina Faso" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_BurkinaFaso/>)}
    {(destination === "Burundi" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Burundi/>)}
    {(destination === "Benin" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Benin/>)}
    {(destination === "Barbados" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Barbados/>)}
    {(destination === "Cambodia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Combodia/>)}
    {(destination === "China" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_China/>)}
    {(destination === "Cameroon" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Cameroon/>)}
    {(destination === "Central African Republic" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Central_African_Republic/>)}
    {(destination === "Republic of the Congo" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Congo/>)}
    {(destination === "Cape Verde" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_CapeVarde/>)}
    {(destination === "Djibouti" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Djibouti/>)}
    {(destination === "Ecuador" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Ecuador/>)}
    {(destination === "Eritrea" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Eritrea/>)}
    {(destination === "Egypt" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Egypt/>)}
    {(destination === "Ethiopia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Ethiopia/>)}
    {(destination === "Fiji" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Fiji/>)}
    {(destination === "Gabon" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Gabon/>)}
    {(destination === "Ghana" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Ghana/>)}
    {(destination === "Gambia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Gambia/>)}
    {(destination === "Guinea" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Guinea/>)}
    {(destination === "Georgia" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Georgia/>)}
    {(destination === "Honduras" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Honduras/>)}
    {(destination === "Iraq" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Iraq/>)}
    {(destination === "Ivory Coast" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_IvoryCoast/>)}
    {(destination === "India" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_India/>)}
    {/* {(destination === "Honduras" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Honduras/>)}
    {(destination === "Iraq" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Iraq/>)} */}



{/* Business_visas */}



    </div>
  );
};

export default NonUsCitizen