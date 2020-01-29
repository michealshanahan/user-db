import React, { Component } from 'react'
import { withWeather } from './WeatherProvider.js'
import DailyWeatherCard from './DailyWeatherCard.js'

class WeatherCard extends Component {
    constructor(){
        super()
        this.state = {
            forecast: {
                consolidated_weather: []
            }
        }
    }
    componentDidMount(){
        this.props.getWoeid(this.props.locations[0])
        this.setState({
            forecast: this.props.forecast
        })
    }
    
    render(){

        let mappedForecast = ()=> {
            return this.state.forecast.consolidated_weather.map((daysWeather, index) => {
                
                return (
                    <div>
                        <DailyWeatherCard number = { index } key = { daysWeather.id } daysWeather = { daysWeather } />
                    </div>
                )
            }) 
        }
        
        return(
            <div>
                { this.props.locations[0].title }
                { mappedForecast() }
            </div>
        )
    }
}

export default withWeather(WeatherCard)
