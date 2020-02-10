import React, { Component } from "react"

class Header extends Component {
    constructor(){
        super()
        this.state = {
            locationName: ''
        }
    }

    handleChange = ( e ) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = ( e ) => {
        e.preventDefault()

    }

    render(){
        return(
            <div className = "header">
                <div className = "formContainer">
                    <form>
                        <input onChange = { this.handleChange } name = 'locationName' value = { this.state.locationName } placeholder = "City Name" minLength = '3' />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Header

