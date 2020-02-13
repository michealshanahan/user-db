import React, { Component } from 'react'
import Axios from 'axios'

import MultipleLocations from './MultipleLocations'
import WeatherCard from './WeatherCard'

class Results extends Component {
    constructor(){
        super()
        this.state = {
            response : []
        }
    }

    componentDidMount(){
        const searchParameter = this.props.match.url.slice(8)
        console.log('mount')
        Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/search/?query=${ searchParameter }`).then(res => {
                     this.setState({ response : res.data })
        })
    }
    
    componentDidUpdate(){
        const searchParameter = this.props.match.url.slice(8)
        console.log('update')
        Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/search/?query=${ searchParameter }`).then(res => {
                     this.setState({ response : res.data })
        })
    }
    
    render(){
        
        

        return(
            <div> 
                <div>
                    { this.state.response.length === 1 && <WeatherCard /> }
                    { this.state.response.length === 0 && <h3>No results, try using less letters</h3>}
                    { this.state.response.length > 1 && <MultipleLocations /> }

                </div>
            </div>
        )

    }
}

export default Results