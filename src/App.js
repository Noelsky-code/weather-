import React,{Component} from 'react';
import './App.css';
import Weather from './Weather.js'
import {Spinner} from 'reactstrap'


class App extends Component{

state = {
  
}

componentDidMount(){
 // this._getWeather()
}

_callApi= (name) =>{
  return (fetch('https://api.openweathermap.org/data/2.5/weather?q=name&appid=1b35fd0006e39bc93976cade7e656d07&units=metric')
          .then(
            (request)=>{return request.json()}    
        )
        .catch((e)=>{console.log(e)})
  )
}
  
 _getWeather=async()=>{
   const a =this.state.name
   const weather =await this._callApi(a);
    this.setState({
      weather
    })
 }

 _renderWeather=()=>{
  const data = this.state.weather  
  return (
   <Weather 
     city = {data.name} 
     //temp = {data.main.temp}  
    />
    );
  }
_onChange=(e)=>{
  this.setState({
    name : e.target.value
  }
  )
}

_OnKeyPress=(e)=>{

  e.key==='Enter'&&this._getWeather()
  
}

  render(){
    return (
      <div className = "App">
       <input type="text" placeholder="Enter City Name" onChange={this._onChange}
        onKeyPress = {this._OnKeyPress}></input>
      {this.state.weather ? this._renderWeather() : 
        <h1>
         <Spinner color ="primary"/>
          <h5>Loading!</h5>
        </h1>
      }
      </div>
    );
 }
}

export default App;
