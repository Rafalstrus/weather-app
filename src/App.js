import React, { useState } from 'react';
import "./App.css"
function App() {
  const [city, cityChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
  const [weatherTableAboutAroundCties,WeatherAroundChange] = useState([])
  return (
    <div id="App">
      <input
        placeholder="City Name"
        onChange={(e) => { cityChange(e.target.value) }}
      ></input>
      <button
        onClick={() => { handleWeatherTable(weatherTableChange, city) }
        }
        id="checkCityButton">Check Weather</button>
      {(weatherTable.cod === 200) ? returnWeatherData(weatherTable)
        : ""}
      <button
        onClick={()=>( (weatherTable.cod === 200) ?
          handleWeatherAround(WeatherAroundChange, weatherTable.coord.lat,weatherTable.coord.lon): "")}
      >Around Cities</button>
      {(weatherTable.cod === 200) ? returnAroundData(weatherTableAboutAroundCties)
        : ""}
    </div>
  )
}
async function handleWeatherTable(weatherTableChange, city) {
  weatherTableChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection?city=' + city)
    .then(res => res.json()))
}
async function handleWeatherAround(WeatherAroundChange, lat,lon) {
  WeatherAroundChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection/around?lat=' + lat+'&lon='+lon)
    .then(res => res.json()))
}

function returnWeatherData(weatherTable) {
  var sunrise = new Date(weatherTable.sys.sunrise * 1000)
  var sunset = new Date(weatherTable.sys.sunset * 1000)
  return (<div>
    <p>{weatherTable.consolename}</p>
    <h3>Temperature</h3>
    <p>temperature :{(weatherTable.main.temp).toFixed(1)}°C</p>
    <p>feels like: {(weatherTable.main.feels_like).toFixed(1)}°C</p>
    <p>min/max:{(weatherTable.main.temp_min).toFixed(1)}°C/{(weatherTable.main.temp_max).toFixed(1)}°C</p>
    <p>pressure: {(weatherTable.main.pressure).toFixed(1)}</p>
    <p>humidity: {(weatherTable.main.humidity).toFixed(1)}</p>
    <h3>Wind</h3>
    <p>{weatherTable.wind.speed}</p>
    <p>{weatherTable.wind.deg}</p>
    <h3>Sun</h3>
    <p>sunrise: {sunrise.getHours() + ":" + sunrise.getMinutes() + ":" + sunrise.getSeconds()}</p>
    <p>sunset: {sunset.getHours() + ":" + sunset.getMinutes() + ":" + sunset.getSeconds()}</p>
    <p>{weatherTable.clouds.all}</p>
    <p>{weatherTable.coord.lat}</p>
</div>)
}
function returnAroundData(weatherTableAboutAroundCties){
  return(
  <div>
    {/*(console.log(weatherTableAboutAroundCties.list.map())*/}
  </div>)
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("checkCityButton").click();
  }
});

export default App;
