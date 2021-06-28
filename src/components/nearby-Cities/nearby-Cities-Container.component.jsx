import React from 'react';

import { NearbyCitiesCard } from "./nearby-Cities-Card.component"

import "./nearby-Cities.styles.css"

export const NearbyCitiesInformations = props => {
    var counter = 0
    return (
        <div id="nearby-Cities-Container">
            <h2>Nearby Cities:</h2>
        <div id="nearby-Cities-Cards-Container">
            {props.weatherTableAboutAroundCties.list.map((data) => {
                var date = new Date(data.dt * 1000)
                console.log(data.name,props.cityName)
                if (data.name !== props.cityName && counter <= 5) {
                    counter = counter + 1
                    return (
                        <NearbyCitiesCard key ={counter}
                            data={data}
                            date={date}
                        />
                    )
                }
                return null
            })}
        </div>
        </div>
    )
}

