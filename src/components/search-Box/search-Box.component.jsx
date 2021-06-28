import React from 'react';

import './search-Box.styles.css'

export const SearchBox = props => (
    <div id="search-Box">
        <input
            id="city-Name-Input"
            placeholder="City Name"
            onChange={(e) => { props.cityChange(e.target.value) }}
        ></input>
        <button
        id="city-Name-Button"
            onClick={() => {
                props.handleWeatherTable(props.weatherTableChange, props.city)
                props.handleForecastTable(props.forecastTableChange, props.city)
            }
            }>
                Check Weather</button>
    </div>
)