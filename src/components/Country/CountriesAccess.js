import React from "react";
import './Country.css';
import { useEffect, useState } from 'react';



function CountriesAccess(){
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[]);
  
    return (
      <div>
        {console.log(countries)};
        {
          countries.map(country => <CountriesShow name ={country.name.common} image={country.flags.png}></CountriesShow>)
          //countries.map(country => console.log(country.name.common))
        }
      </div>
    )
  }
  
  function CountriesShow(props){
    return(
      <div>
        <h2>name: {props.name}</h2>
        <img src={props.image} alt="" />
      </div>
    )
  }

  export default CountriesAccess;