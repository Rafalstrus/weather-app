import React from 'react';

import './next-Hours.styles.css'

export const NextHoursCard = (props: any) => (
    <div className="next-Hours-Card">
        <p>{props.date.toLocaleDateString()}</p>
        <p className="next-Hours">{props.date.getHours() + ":" + props.date.getMinutes() + "0"}</p>
        <p>temp: <span className="temperature">{props.data.main.temp + "°C"}</span></p>
        <p className="weather-Type">{props.data.weather[0].main}</p>
        <p>{props.data.weather[0].description}</p>
        <img
            src={"http://openweathermap.org/img/wn/" + props.data.weather[0].icon + ".png"}
            alt=""
            className="weather-Img"></img>
    </div>
)