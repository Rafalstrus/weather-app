import React from 'react';
import {ForecastCard} from './next-Days-Card.component'
import './next-Days.styles.css'

export const Forecast = props => {
    return (
        <div id="forecast-Container">
            {props.forecastTable.list.map((data) => {
                var date = new Date(data.dt * 1000)
                if(date.getHours() === 14){
                    return(
                        <ForecastCard
                        date = {date}
                        temp = {data.main.temp}
                        weatherName = {data.weather[0].main}
                        weatherDescription = {data.weather[0].description}
                        />
                    )
                }
            })}
        </div>
    )
}