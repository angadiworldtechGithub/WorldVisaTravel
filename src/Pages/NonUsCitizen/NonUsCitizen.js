import React from 'react'
import { useLocation } from 'react-router-dom';
import Canada from '../../Components/Canada/Canada';
import India from "../../Components/India/India";
import "./NonUsCitizen.css";
import Afghanistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Afghanistan';
import BelarusTouristNonUs from '../../Components/Tourist_visa/Tourist_non_us_visa/BelarusTouristNonUs';
import Tourist_nonUs_Belize from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Belize';
import Tourist_nonUs_Brunei from "../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Brunei";
import Tourist_nonUs_Bahamas from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bahamas';
import Tourist_nonUs_Botswana from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Botswana';
import Tourist_nonUs_Bulgaria from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bulgaria';
import Tourist_nonUs_Bangladesh from "../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Bangladesh";
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
       {destination === "India" && <India />}

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
    {/* {(destination === "China" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_China/>)}
    {(destination === "Cameroon" && currentPathlocation === "/visas/tourist-visa/Non-USCitizens/NonUsCitizen") &&  (<Tourist_nonUs_Cameroon/>)} */}



{/* Business_visas */}



    </div>
  );
};

export default NonUsCitizen