import React, { Component } from 'react'
import Axios from 'axios'

import DailyWeather from './DailyWeather.js'

class WeeksWeather extends Component {
    constructor(props){
        super(props)
        this.state = {
            forecast : {
                consolidated_weather: []
            },
            celcius: false
        }
    }

    componentDidMount(){
        let search = this.props.woeid
        Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/${ search }`).then(res => {
                     this.setState({ forecast : res.data })
        })
    }

    toggle = (toToggle) => { this.setState((prev) => ({[toToggle]: !prev[toToggle]})) }

    render(){
        console.log(this.state.forecast)
        let mappedForecast = this.state.forecast.consolidated_weather.map(daysWeather => {
            return(
                <div>
                    <DailyWeather key = {daysWeather.id} daysWeather = {daysWeather} celcius = { this.state.celcius } />
                    <button onClick = { ()=> console.log(this.props) } >WeeksWeather</button>
                </div>
            )
        })
        return(
            <div>
                <div>
                    <span onClick = {()=>{this.toggle("celcius")}} >
                        <span className = {`celcius_${this.state.celcius}`} >°F</span>|<span className = {`celcius_${!this.state.celcius}`} >°C</span>
                    </span>
                </div>
                <div>
                    {this.state.forecast.title}
                </div>
                {mappedForecast}
            </div>
        )
    }
}

export default WeeksWeather