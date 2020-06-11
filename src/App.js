import React,{Component} from 'react';
import './App.css';
import Weather from './Weather.js'


class App extends Component{

state = {

}

componentDidMount(){
  this._getWeather()
}

_callApi= () =>{
  return (fetch('https://api.openweathermap.org/data/2.5/weather?q=Daegu&appid=1b35fd0006e39bc93976cade7e656d07&units=metric')
          .then(
            (request)=>{return request.json()}    
        )
        .catch((e)=>{console.log(e)})
  )
}
  
 _getWeather=async()=>{
   const weather =await this._callApi();
    this.setState({
      weather:weather
    })
 }

 _renderWeather=()=>{
  const data = this.state.weather  
  return (
   <Weather 
     city = {data.name} 
     temp = {data.wind.speed}  
    />
    /*<div>
      <h1>{data.name}</h1>
      <h1>{data.main.temp}</h1>
    </div>*/
    );
  }

  render(){
    return (
      <div className = "App">
      {this.state.weather ? this._renderWeather() : "Loading!"}
      </div>
    );
 }
}

export default App;
