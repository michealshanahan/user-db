import React, { Component } from 'react'
import { withWeather } from './WeatherProvider.js'


class EnterLocation extends Component {
    constructor(){
        super()
        this.state = {
            searchLocation: ''
        }
    }

    handleChange = ( e )=> {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    } 
    add = ()=> {
        return 4+4
    }

    handleSubmit = ( e )=> {
        e.preventDefault()
        this.props.searchLocation(this.state.searchLocation)
        this.props.checkLength(this.add)
    }

    render(){
        return(
            <div>
                <form onSubmit = { this.handleSubmit } >
                    Search By Location:     
                    <input onChange = { this.handleChange } name = 'searchLocation' value = { this.state.searchLocation } placeholder = "City Name" minLength = '3' />
                    <button >See Forecast</button>
                </form>

                <button onClick = {()=>(console.log(this.props))}>Provider Props</button>
                
            </div>
        )
    }
}

export default withWeather( EnterLocation )