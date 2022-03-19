import React from 'react';
import { ForecastCard } from './next-Days-Card.component'
import './next-Days.styles.css'

export const Forecast = (props: any) => (
    <div id="forecast-Container">
        {props.forecastTable.list.map((data: any) => {
            var date = new Date((data.dt + props.forecastTable['city'].timezone - ((new Date().getTimezoneOffset() / -60) * 3600)) * 1000)
            if ([11, 12, 13].includes(date.getHours())) {
                return (
                    <ForecastCard
                        key={data.dt}
                        date={date}
                        temp={data.main.temp}
                        weatherName={data.weather[0].main}
                        weatherDescription={data.weather[0].description}
                        icon={data.weather[0].icon}
                    />
                )
            }
            return null;
        })}
    </div>
)