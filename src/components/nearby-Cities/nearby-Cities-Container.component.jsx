import React from 'react';

import { NearbyCitiesCard } from "./nearby-Cities-Card.component"

import "./nearby-Cities.styles.css"

export const NearbyCitiesInformations = props => {
    var counter = 0
    return (
        <div id="nearby-Cities-Container">
            {props.weatherTableAboutAroundCties.list.map((data) => {
                var date = new Date(data.dt * 1000)
                if (data.name !== props.cityName && counter <= 5) {
                    counter = counter + 1
                    return (
                        <NearbyCitiesCard
                            data={data}
                            date={date}
                        />
                    )
                }
            })}
        </div>
    )
}
