import React from 'react';
import "./weather-informations.styles.css"

export const WeatherInformations = props => {
    var weatherTable = props.weatherTable
    var sunrise = new Date(weatherTable.sys.sunrise * 1000)
    var sunset = new Date(weatherTable.sys.sunset * 1000)
    return (
        <div>
            <h2>Current Weather</h2>
            <div id="Informationa-about-City">
                <h4>Country Info</h4>
                <p>{weatherTable.sys.country}</p>
                <p>{weatherTable.name}</p>
                <h3>Temperature</h3>
                <p>temperature: {(weatherTable.main.temp).toFixed(1)}°C</p>
                <p>feels like: {(weatherTable.main.feels_like).toFixed(1)}°C</p>
                <p>min/max:{(weatherTable.main.temp_min).toFixed(1)}°C/{(weatherTable.main.temp_max).toFixed(1)}°C</p>
                <p>pressure: {(weatherTable.main.pressure).toFixed(1)}</p>
                <p>humidity: {(weatherTable.main.humidity).toFixed(1)}</p>
                <h3>Weather</h3>
                <p>{weatherTable.weather[0].main}</p>
                <p>{weatherTable.weather[0].description}</p>
                <img src={"http://openweathermap.org/img/wn/" + weatherTable.weather[0].icon + ".png"} alt=""></img>
                <h3>Wind</h3>
                <p>{weatherTable.wind.speed}</p>
                <p>{weatherTable.wind.deg}</p>
                <h3>Sun</h3>
                <p>sunrise: {sunrise.getHours() + ":" + sunrise.getMinutes() + ":" + sunrise.getSeconds()}</p>
                <p>sunset: {sunset.getHours() + ":" + sunset.getMinutes() + ":" + sunset.getSeconds()}</p>
            </div>
        </div>
    )
}

