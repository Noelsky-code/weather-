import React,{Component} from 'react';
import './App.css';


class App extends Component{

state = {

}

componentDidMount(){
  this._getWeather()
}

_callApi= () =>{
  return (fetch('https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=1b35fd0006e39bc93976cade7e656d07')
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
    return (<h1>{this.state.weather.name}</h1>
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
