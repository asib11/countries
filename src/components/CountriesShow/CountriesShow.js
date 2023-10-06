import React from 'react';
import './CountriesShow.css'

const CountriesShow = (props) => {
    return (
        <div>
        <h2>name: {props.name}</h2>
        <img src={props.image} alt="" />
        </div>
    );
};

export default CountriesShow;