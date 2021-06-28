import React from 'react';

import './next-Hours.styles.css'

export const NextHoursCard = props => {
    return (
        <div className="next-Hours-Card">
                    <p>{props.date.toLocaleDateString()}</p>
                    <p>{props.date.getHours() + ":" + props.date.getMinutes() + "0"}</p>
                    <p>{props.data.main.temp}</p>
                    <p>{props.data.weather[0].main}</p>
                    <p>{props.data.weather[0].description}</p>
        </div>
    )
}