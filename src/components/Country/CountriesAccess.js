import React from "react";
import './CountriesAccess.css';
import { useEffect, useState } from 'react';
import CountriesShow from "../CountriesShow/CountriesShow";



function CountriesAccess() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Welcome to world tour</h1>
      {console.log(countries)}
      <div className="country-container">
        
        {

          countries.map(country => <CountriesShow data={country} key={country.cca3}></CountriesShow>)
          // countries.map(country => <CountriesShow name ={country.name.common} image={country.flags.png}></CountriesShow>)
          //countries.map(country => console.log(country.name.common))
        }
      </div>
    </div>
  )
}

export default CountriesAccess;