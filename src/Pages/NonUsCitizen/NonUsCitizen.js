import React from 'react'
import { useLocation } from 'react-router-dom';
import Canada from '../../Components/Canada/Canada';
import India from "../../Components/India/India";
import "./NonUsCitizen.css";
import Afghanistan from '../../Components/Tourist_visa/Tourist_non_us_visa/Afghanistan';
import BelarusTouristNonUs from '../../Components/Tourist_visa/Tourist_non_us_visa/BelarusTouristNonUs';
import Tourist_nonUs_Belize from '../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Belize';
import Tourist_nonUs_Brunei from "../../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Brunei";

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
       {destination === "Belarus" && <BelarusTouristNonUs/>}
       {destination === "Belize" && <Tourist_nonUs_Belize/>}
       {destination === "Brunei" && <Tourist_nonUs_Brunei/>}
       
{/* Business_visas */}



    </div>
  );
};

export default NonUsCitizen