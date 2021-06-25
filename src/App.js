import React, { useState } from 'react';
import { WeatherInformations } from './components/weather-Informations/informations-container.component';
import { NearbyCitiesInformations } from './components/nearby-Cities/nearbyCities-container.component'
import "./App.css"
function App() {
  const [city, cityChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
  const [weatherTableAboutAroundCties, WeatherAroundChange] = useState([])
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
      <button
        onClick={() => ((weatherTable.cod === 200) ?
          handleWeatherAround(WeatherAroundChange, weatherTable.coord.lat, weatherTable.coord.lon) : "")}
      >Around Cities</button>
      {(weatherTable.cod === 200) ?
        <WeatherInformations
          weatherTable={weatherTable}
        />
        : ""}
        {console.log(weatherTableAboutAroundCties)}
      {
        (weatherTableAboutAroundCties.cod === "200") ?
                   <NearbyCitiesInformations
          weatherTableAboutAroundCties={weatherTableAboutAroundCties}
        />
          : ""}
    </div>
  )
}
async function handleWeatherTable(weatherTableChange, city) {
  weatherTableChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection?city=' + city)
    .then(res => res.json()))
}
async function handleWeatherAround(WeatherAroundChange, lat, lon) {
  WeatherAroundChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection/around?lat=' + lat + '&lon=' + lon)
    .then(res => res.json()))
}


document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("checkCityButton").click();
  }
});

export default App;
