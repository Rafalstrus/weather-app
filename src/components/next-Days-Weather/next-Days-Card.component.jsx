import React from 'react'
import './next-Days.styles.css'

export const ForecastCard = props => {
    return (
        <div className="forecast-Card">
            <p>{props.date.toLocaleDateString()}</p>
            <p>{props.date.getHours() + ":" +
                props.date.getMinutes() + "0"
            }</p>

            <p>{"temp: "+props.temp +"°C"}</p>

            <p>{props.weatherName}</p>

            <p>{props.weatherDescription}</p>
            <img src={"http://openweathermap.org/img/wn/"+props.icon+".png"}alt=""></img>
        
        
</div>
    )
}