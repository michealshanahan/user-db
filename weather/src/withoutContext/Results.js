import React, { Component } from 'react'
import Axios from 'axios'

import MultipleLocations from './MultipleLocations'
import WeatherCard from './WeeksWeather'

class Results extends Component {
    constructor(){
        super()
        this.state = {
            response : []
        }
    }

    getData = (search) => {
        return (
            Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/search/?query=${ search }`).then(res => {
                this.setState({ response : res.data })
        })
        )
    }

    componentDidMount(){
        const searchParameter = this.props.match.url.slice(8)
        this.getData(searchParameter)
        
    }
    
    componentDidUpdate(prevProps){
        let searchParameter = this.props.match.url.slice(8)
        let prevSearchParameter = prevProps.match.url.slice(8)
        if( searchParameter !== prevSearchParameter ){
            this.getData(searchParameter)
        }
    }
    
    render(){
        
        return(
            <div> 
                <div>
                    { this.state.response.length === 1 && <WeatherCard woeid = {this.state.response[0].woeid} /> }
                    { this.state.response.length === 0 && <h3>No results, try using less letters</h3>}
                    { this.state.response.length > 1 && <MultipleLocations /> }

                </div>
            </div>
        )
    }
}

export default Results