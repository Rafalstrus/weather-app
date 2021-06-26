import React from 'react'
import './next-Days.styles.css'

export const ForecastCard = props => {
    return (
        <div className="Forecast-Card">
            {// search for another funtion to getDate :)
            }
                <p>{props.date.getDay() + " "+ props.date.getHours()}</p>

                <p>{props.temp}</p>

                <p>{props.weatherName}</p>

                <p>{props.weatherDescription}</p>
        </div>
    )
}