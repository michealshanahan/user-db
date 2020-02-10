import React, { Component } from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            location : ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [ name ]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('yay')

    }

    render(){

        return (
            <div>
                Header
                <form onClick = { this.handleSubmit } >
                    <input minLength = '3' onChange = { this.handleChange } name = 'location' value = { this.state.location } />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Header