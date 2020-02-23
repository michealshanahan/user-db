import React, { Component } from 'react'

import DailyWeather from './DailyWeather.js'

class MetricSwitch extends Component{
    constructor(){
        super()
        this.state = {
            celcius: false
        }
    }

    toggle = (toToggle) => { this.setState((prev) => ({[toToggle]: !prev[toToggle]})) }

    render(){
        return(
            <div>
                <span onClick = {()=>{this.toggle("celcius")}} >
                    <span className = {`celcius_${!this.state.celcius}`} >°F</span>|<span className = {`celcius_${this.state.celcius}`} >°C</span>
                </span>
            </div>
        )
    }

}

export default MetricSwitch