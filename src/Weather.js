import React,{Component} from 'react';
import './Weather.css'
import './App.js'
import { render } from '@testing-library/react';

function Weather({city,temp}){
        return(
             <div className="Weather">
                <h1>{city}</h1>
                <h1>{temp}</h1>
           </div>
        );
}

export default Weather;