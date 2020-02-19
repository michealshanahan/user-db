import React, { Component } from 'react'
import Axios from 'axios'

import DailyWeather from './DailyWeather'

class WeatherCard extends Component {
    constructor(){
        super()
        this.state = {
            forecast : {
                consolidated_weather: []
            }
        }
    }

    componentDidMount(){
        let search = this.props.woeid
        Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/${ search }`).then(res => {
                     this.setState({ forecast : res.data })
        })
    }


    render(){
        console.log(this.state.forecast)
        let mappedForecast = this.state.forecast.consolidated_weather.map(daysWeather => {
            return(
                <DailyWeather key = {daysWeather.id} daysWeather = {daysWeather} />
            )
        })
        return(
            <div>
                <div>{this.state.forecast.title}</div>
                {mappedForecast}
            </div>
        )
    }
}

export default WeatherCard