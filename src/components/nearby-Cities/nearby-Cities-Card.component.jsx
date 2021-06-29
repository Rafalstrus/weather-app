import React from 'react';

import "./nearby-Cities.styles.css"
export const NearbyCitiesCard = props => (
        <div className="nearby-Cities-Card">
            <p className="city-Name">{props.data.name}</p>
                    <p>{(props.date.getHours() + ":" + 
                    ((props.date.getMinutes().toString().length!==1)? props.date.getMinutes(): "0"+props.date.getMinutes()))}</p>
                    <p>temp: <span className="temperature">{props.data.main.temp + "°C"}</span></p>
                    <p className="weather-Type">{props.data.weather[0].main}</p>
                    <p>{props.data.weather[0].description}</p>
                    <img 
                    src={"http://openweathermap.org/img/wn/"+props.data.weather[0].icon+".png"}
                alt=""
                className="weather-Img"></img>
        </div>
)

