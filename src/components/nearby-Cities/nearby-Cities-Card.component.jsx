import React from 'react';

import "./nearby-Cities.styles.css"
export const NearbyCitiesCard = props => (
        <div className="nearby-Cities-Card">
            <p>{props.data.name}</p>
                    <p>{props.date.getHours() + ":" + props.date.getMinutes() + "0"}</p>
                    <p>{"temp: "+props.data.main.temp + "°C"}</p>
                    <p>{props.data.weather[0].main}</p>
                    <p>{props.data.weather[0].description}</p>
                    <img src={"http://openweathermap.org/img/wn/"+props.data.weather[0].icon+".png"}alt=""></img>
        </div>
)

