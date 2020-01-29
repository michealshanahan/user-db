
import React, { Component } from 'react'

const Axios = require('axios')

const { Consumer, Provider } = React.createContext()

class WeatherProvider extends Component{
    constructor(){
        super()
        this.state = {
            forecast: {
                consolidated_weather: []
            },
            locations: [
                {
                    latt_long: "40.71455,-74.007118",
                    location_type: "City",
                    title: "New York",
                    woeid: 2459115
                }
            ],
            localArea: JSON.parse(localStorage.getItem('local')) || []
        }
    }
    toggle = ( toToggle ) => this.setState((prevState) => ({
       [ toToggle ] : !prevState[ toToggle ] 
    }))
    
    addWeather = ( locationZip ) => {
        localStorage.setItem("localZip", JSON.stringify)
    }

    
    
     
    getWoeid = (city) => {
        return Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/${city.woeid}/`).then(res => {
            this.setState({
                forecast: res.data
            })
        })
    }
    searchLocation = ( location ) => {
        Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/search/?query=${ location }`)
            .then(res => {
                this.setState({
                    locations: res.data
                });
                
        })
    }

    checkLength = (func) => {
        if(this.state.locations.length === 1) {
            this.getWoeid(this.state.locations[0])
        } else {return func()}
    }

    render(){
        return(
            <Provider value = {{...this.state,
                                toggle: this.toggle,
                                searchLocation: this.searchLocation,
                                getWoeid: this.getWoeid,
                                checkLength: this.checkLength
                                }} >
                { this.props.children }

            </Provider>
        )
    }
}

export default WeatherProvider
export const withWeather = ( C ) => {
    return( props ) => 
        <Consumer>
            {
                value => 
                    <C {
                        ...value
                    } {
                        ...props
                    } />
            }
        </Consumer>
}