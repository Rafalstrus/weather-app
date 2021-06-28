import React from 'react';

import './next-Hours.styles.css'

export const NextHoursCard = props => {
    return (
        <div className="next-Hours-Card">
                    <p>{props.date.toLocaleDateString()}</p>
                    <p>{props.date.getHours() + ":" + props.date.getMinutes() + "0"}</p>
                    <p>{"temp: "+props.data.main.temp + "°C"}</p>
                    <p>{props.data.weather[0].main}</p>
                    <p>{props.data.weather[0].description}</p>
                    <img src={"http://openweathermap.org/img/wn/"+props.data.weather[0].icon+".png"}alt=""></img>
        </div>
    )
}