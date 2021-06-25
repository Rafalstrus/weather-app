import React from 'react';

export const WeatherInformations = props => {
    var weatherTable = props.weatherTable
    var sunrise = new Date(weatherTable.sys.sunrise * 1000)
    var sunset = new Date(weatherTable.sys.sunset * 1000)
    return (
        <div>
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
        </div>
    )
}

