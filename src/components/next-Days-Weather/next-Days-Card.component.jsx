import React from 'react'
import './next-Days.styles.css'

export const ForecastCard = props => {
    return (
        <div className="forecast-Card">


            {// search for another funtion to getDate :)
            }
            <p>{props.date.getHours() + ":" +
                props.date.getMinutes() + "0" +
                " " + props.date.toLocaleDateString()}</p>

            <p>{props.temp}</p>

            <p>{props.weatherName}</p>

            <p>{props.weatherDescription}</p>
        </div>
    )
}