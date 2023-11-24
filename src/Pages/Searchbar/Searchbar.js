// CountrySearchBar.js
import React, { useState } from 'react';
import Select from 'react-select';
import Flag from 'react-country-flag';
import countryData from '../CountryData/CountryData';
import styles from "./Searchbar.module.css";

const options = countryData.map((country) => ({
  value: country.alpha2Code,
  label: (
    <div>
      <Flag countryCode={country.alpha2Code} svg />
      {country.name}
    </div>
  ),
}));

const Searchbar = () => {
  const [sourceCountry, setSourceCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);

  const handleSourceCountryChange = (selectedOption) => {
    setSourceCountry(selectedOption);
  };

  const handleDestinationCountryChange = (selectedOption) => {
    setDestinationCountry(selectedOption);
  };

  const handleGoButtonClick = () => {
    // Handle the "Go" button click here, e.g., navigate to a new page or perform an action
  };

  return (
    <div className={`${styles["search-container"]}`}>
      <div className={`${styles["search-select-container"]}`}>
        <label>Select Source Country:</label>
        <Select
          value={sourceCountry}
          onChange={handleSourceCountryChange}
          options={options}
          isSearchable={true}
          placeholder="Select source country..."
        />
      </div>
      <div className={`${styles["search-select-container"]}`}>
        <label>Select Destination Country:</label>
        <Select
          value={destinationCountry}
          onChange={handleDestinationCountryChange}
          options={options}
          isSearchable={true}
          placeholder="Select destination country..."
        />
      </div>
     
    </div>
  );
};

export default Searchbar;
