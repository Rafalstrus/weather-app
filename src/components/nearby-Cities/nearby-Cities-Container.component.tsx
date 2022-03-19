import React from 'react';

import { NearbyCitiesCard } from "./nearby-Cities-Card.component"

import "./nearby-Cities.styles.css"

export const NearbyCitiesInformations = (props: any) => (
    <div id="nearby-Cities-Container">
        <h2>Nearby Cities:</h2>
        <div id="nearby-Cities-Cards-Container">
            {props.weatherTableAboutAroundCties.list.filter((data: any) => data.name !== props.cityName)
                .map((data: any, index: number) => {
                    var date = new Date((data.dt + props.timezone - (new Date().getTimezoneOffset() / -60) * 3600) * 1000)
                    if (data.name !== props.cityName && index <= 5) {
                        return (
                            <NearbyCitiesCard key={index}
                                data={data}
                                date={date}
                            />
                        )
                    }
                    index -= 1;
                    return null
                })}
        </div>
    </div>
)

