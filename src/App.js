import React, { useState, useEffect } from 'react';

import { WeatherInformations } from './components/weather-Informations/informations-Container.component';
import { NearbyCitiesInformations } from './components/nearby-Cities/nearby-Cities-Container.component'
import { Forecast } from './components/next-Days-Weather/next-Days-Weather-container.component'
import { NextHours } from './components/next-Hours/next-Hours-container.component'
import { SearchBox } from './components/search-Box/search-Box.component'

import "./App.css"
import { Loading } from './components/loading-screen/loading';

function App() {
  const [city, cityChange] = useState("")
  const [errorMessage, errorMessageChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
  const [weatherTableAboutAroundCties, weatherAroundChange] = useState([])
  const [forecastTable, forecastTableChange] = useState([])
  
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleWeatherTable(function(){return 0}, 'Warsaw')
  },[])
  useEffect(() => {
    if (weatherTable.cod !== 200) {
      errorMessageChange(weatherTable.message)
      weatherAroundChange("")
    }
    else {
      handleWeatherAround(weatherAroundChange, weatherTable.coord.lat, weatherTable.coord.lon)
    }
  }, [weatherTable])


  return (
    <div id="App">
      <SearchBox
        cityChange={cityChange}
        weatherTableChange={weatherTableChange}
        forecastTableChange={forecastTableChange}
        handleWeatherTable={handleWeatherTable}
        handleForecastTable={handleForecastTable}

        setLoading={setLoading}
        city={city}
      />
      {(loading)? 
      <Loading 
      loading={loading}
      />:
      <div>
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
              cityName={weatherTable.name}
              timezone={weatherTable.timezone}
            />
            : ""}
      </div>
      {
        (forecastTable.cod === "200") ?
          <div>
            <h2>Daily Forecast</h2>
            <Forecast
              forecastTable={forecastTable}
            />
          </div>
          : ""}
          </div>}
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
async function handleForecastTable(setLoading,forecastTableChange, city) {
  forecastTableChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection/forecast?city=' + city)
    .then(res => res.json()))
    setTimeout(function(){ setLoading(false) }, 1500);
  }


document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("city-Name-Button").click();
  }
});

export default App;


/*
things to do:
add loading screen after click button
after mouse hover under element add some scale

*/
