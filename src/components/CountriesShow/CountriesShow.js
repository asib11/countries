import React from 'react';
import './CountriesShow.css'

const CountriesShow = (props) => {
    const {name, flags, population} =props.data; // destructuring
    return (
        <div className='country'>
            <h2>name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>population:{population} </p>
        </div>
    );
};

export default CountriesShow;