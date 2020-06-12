import React,{Component} from 'react';
import './App.css';
import Weather from './Weather.js'
import {Spinner} from 'reactstrap'


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
      weather
    })
 }

 _renderWeather=()=>{
  const data = this.state.weather  
  return (
   <Weather 
     city = {data.name} 
     temp = {data.wind.speed}  
    />
    );
  }
_onChange=(e)=>{
  this.setState({
    name : e.target.value
  })
  console.log(this.state.name)

}

  render(){
    return (
      <div className = "App">
       <input type="text" placeholder="Enter City Name" onChange={this._onChange}></input>
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
