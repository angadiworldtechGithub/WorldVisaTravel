import React from 'react'
import { useLocation } from 'react-router-dom';
import Canada from '../../Components/Canada/Canada';
import India from "../../Components/India/India";
import SriLanka from '../../Components/SriLanka/SriLanka';
import "./NonUsCitizen.css";

const NonUsCitizen = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const country = searchParams.get('country');
    const destination = searchParams.get('destination');

  console.log("COuntry", country && country);

  return (
    <div className='NonUs-citizen'>
     <center><h2 className="NonUs-citizen-Header">Non-US Citizens</h2></center>
     <center><h3 className="NonUs-citizen-country">{destination && destination}</h3></center>
       {destination === "Canada" && <Canada />}
       {destination === "India" && <India />}
       {destination === "Sri Lanka" && <SriLanka />}
       {destination === "American Samoa" && <America/>}
    </div>
  );
};

export default NonUsCitizen