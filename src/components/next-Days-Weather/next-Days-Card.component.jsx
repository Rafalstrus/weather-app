import React from 'react'
import './next-Days.styles.css'

export const ForecastCard = props => {
    return (
        <div className="forecast-Card">
            <p className="date">{props.date.toLocaleDateString()}</p>
            <p>{props.date.getHours() + ":" +
                props.date.getMinutes() + "0"
            }</p>

            <p>temp: <span className="temperature">{props.temp + "°C"}</span></p>

            <p className="weather-Type">{props.weatherName}</p>

            <p>{props.weatherDescription}</p>
            <img 
            src={"http://openweathermap.org/img/wn/"+props.icon+".png"}
        alt=""
        className="weather-Img"></img>
        
        
</div>
    )
}