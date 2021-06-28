import React from 'react';

import {NextHoursCard} from './next-Hours-Card.component'
import './next-Hours.styles.css'

export const NextHours = props => {
    return (
        
        <div id="next-Hours-Container">
            <h2>Next Hours Predicition</h2>
            <div id="next-Hours-Cards-Container">
            {props.forecastTable.list.map((data, index) => {
                var date = new Date(data.dt * 1000)
                if(index<6){
                    return(
                    <NextHoursCard key={index}
                        date = {date}
                        data = {data}
                    />
                    )
                }
                return null
            })}
        </div>
        </div>
    )
}