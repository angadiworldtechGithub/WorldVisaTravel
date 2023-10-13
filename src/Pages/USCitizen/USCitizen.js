import React from 'react'
import { useLocation } from 'react-router-dom';
import Canada from '../../Components/Canada/Canada';
import "./USCitizen.css";

function USCitizen() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const country = searchParams.get('country');

  console.log("COuntry", country && country);

  return (
    <div className='Us-citizen'>
     <center><h2 className="Us-citizen-Header">US Citizens</h2></center>
     <center><h3 className="Us-citizen-country">{country && country}</h3></center>
     <Canada/>
    </div>
  );
};

export default USCitizen