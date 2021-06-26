import React, { useState, useEffect } from 'react';
import { WeatherInformations } from './components/weather-Informations/informations-container.component';
import { NearbyCitiesInformations } from './components/nearby-Cities/nearbyCities-container.component'
import { Forecast } from './components/next-Days-Weather/nextDaysWeather-container.component'
import { NextHours } from './components/next-Hours/next-Hours-container.component'
import "./App.css"
function App() {
  const [city, cityChange] = useState("")
  const [errorMessage, errorMessageChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
  const [weatherTableAboutAroundCties, weatherAroundChange] = useState([])
  const [forecastTable, forecastTableChange] = useState([])

  useEffect(() => {
    errorMessageChange((weatherTable.cod !== 200) ? weatherTable.message : "")
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
      <button
        onClick={() => ((weatherTable.cod === 200) ?
          handleWeatherAround(weatherAroundChange, weatherTable.coord.lat, weatherTable.coord.lon) : "")}
      >Around Cities</button>

      {
        (weatherTable.cod === 200) ?
          <WeatherInformations
            weatherTable={weatherTable}
          />
          : errorMessage}
      {
        (weatherTableAboutAroundCties.cod === "200") ?
          <NearbyCitiesInformations
            weatherTableAboutAroundCties={weatherTableAboutAroundCties}
          />
          : ""}
      {
        (forecastTable.cod === "200") ?
          <Forecast
            forecastTable={forecastTable}
          />
          : ""}
      {
        (forecastTable.cod === "200") ?
          <NextHours
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
