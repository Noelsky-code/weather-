import React,{Component} from 'react';
import './Weather.css'
import './App.js'
import { render } from '@testing-library/react';

function Weather({city,temp}){
        return(
        <div className="Weather">
                <City city = {city}/>
                <Temp temp = {temp}/>       
         </div>
        );
}

function City({city}){

        return(
        <div className="City">{city}</div>)
}

function Temp({temp}){

        return(<div className="Temp">{temp}</div>
        )
}

export default Weather;