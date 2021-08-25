import { useRef } from 'react';

import './search-Box.styles.css'

export const SearchBox = props => {
    const inputRef = useRef(null)
    return (
        <div id="search-Box">
            <input
                ref={inputRef}
                id="city-Name-Input"
                placeholder="City Name"
                onChange={(e) => { props.cityChange(e.target.value) }}
            ></input>
            <button
                id="city-Name-Button"
                onClick={() => {
                    props.handleWeatherTable(props.weatherTableChange, props.city)
                    props.handleForecastTable(props.setLoading, props.forecastTableChange, props.city)
                        props.setLoading(true)
                }
                }>
                Check Weather</button>
        </div >
    )
}