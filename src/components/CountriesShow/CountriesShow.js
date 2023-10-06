import React from 'react';
import './CountriesShow.css'

const CountriesShow = (props) => {
    const {name, flags} =props.data; // destructuring
    return (
        
        <div>
        <h2>name: {name.common}</h2>
        <img src={flags.png} alt="" />
        </div>
    );
};

export default CountriesShow;