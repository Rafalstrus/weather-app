import React, { useState, useEffect } from 'react';
import { WeatherInformations } from './components/weather-Informations/informations-container.component';
import { NearbyCitiesInformations } from './components/nearby-Cities/nearbyCities-container.component'
import { Forecast } from './components/next-Days-Weather/next-Days-Weather-container.component'
import { NextHours } from './components/next-Hours/next-Hours-container.component'
import "./App.css"
function App() {
  const [city, cityChange] = useState("")
  const [errorMessage, errorMessageChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
  const [weatherTableAboutAroundCties, weatherAroundChange] = useState([])
  const [forecastTable, forecastTableChange] = useState([])

  useEffect(() => {
    if (weatherTable.cod !== 200) {
      errorMessageChange(weatherTable.message)
    }
    else {
      handleWeatherAround(weatherAroundChange, weatherTable.coord.lat, weatherTable.coord.lon)
    }
  }, [weatherTable])


  return (
    <div id="App">
      <input
        placeholder="City Name"
        onChange={(e) => { cityChange(e.target.value) }}
      ></input>
      <button
        onClick={() => {
          handleWeatherTable(weatherTableChange, city)
          handleForecastTable(forecastTableChange, city)
        }
        }
        id="checkCityButton">Check Weather</button>
      <div id="weather-Today-Container">
        {
          (weatherTable.cod === 200) ?
            <WeatherInformations
              weatherTable={weatherTable}
            />
            : errorMessage}
        {
          (forecastTable.cod === "200") ?
            <NextHours
              forecastTable={forecastTable}
            />
            : ""}
        {
          (weatherTableAboutAroundCties.cod === "200") ?
            <NearbyCitiesInformations
              weatherTableAboutAroundCties={weatherTableAboutAroundCties}
            />
            : ""}
      </div>
      {
        (forecastTable.cod === "200") ?
          <Forecast
            forecastTable={forecastTable}
          />
          : ""}
    </div>
  )
}
async function handleWeatherTable(weatherTableChange, city) {
  weatherTableChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection?city=' + city)
    .then(res => res.json()))
}
async function handleWeatherAround(weatherAroundChange, lat, lon) {
  weatherAroundChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection/around?lat=' + lat + '&lon=' + lon)
    .then(res => res.json()))
}
async function handleForecastTable(forecastTableChange, city) {
  forecastTableChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection/forecast?city=' + city)
    .then(res => res.json()))
}


document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("checkCityButton").click();
  }
});

export default App;
