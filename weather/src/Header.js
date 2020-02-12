import React, { Component } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'

import Home from './Home.js'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            location : '',
            response : []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [ name ]: value })
    }

    
    
    render(){
        
        const lengthCheck = ( arrayToCheck ) => {
            arrayToCheck.length === 1 
                ? console.log('1')
                : this.props.history.push(`/search/${this.state.location}`)
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            Axios.get(`https://vschool-cors.herokuapp.com?url=https://www.metaweather.com/api/location/search/?query=${ this.state.location }`).then(res => {
                this.setState({ response : res.data })
                lengthCheck( this.state.response )
            })
    
        }

        return (
            <div>
                Header
                <form onClick = { handleSubmit } >
                    <input minLength = '3' onChange = { this.handleChange } name = 'location' value = { this.state.location } />
                    <button>Search</button>
                </form>
                <div>
                    { this.state.response.length === 1 && <div> Hello one </div> }
                    { this.state.response.length === 0 && <Home />}
                    { this.state.response.length > 1 && <div> More than one</div> }
                </div>
            </div>
        )
    }
}

export default withRouter(Header)