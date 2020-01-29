import React, { Component } from 'react'
import { withWeather } from './WeatherProvider.js'
import WeatherCard from './WeatherCard.js'
import MultipleResults from './MultipleResults'

class WeatherDisplay extends Component{
    constructor(){
        super()
        this.state = {
            locationForecast: []
        }
    }

    render(){
        return(
            <div>
                WeatherDisplay
                
                { this.props.locations.length === 1
                    ? <WeatherCard />
                    : this.props.locations.length === 0
                        ? <h1>No Results Found, Try Searching with Fewer Letters</h1>
                        :<MultipleResults />    
                }
            </div>
        )
    }

}

export default withWeather(WeatherDisplay)