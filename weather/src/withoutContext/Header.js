import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


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
        
       
        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.history.push(`/search/${this.state.location}`)
        }

        return (
            <div>
                Header
                <form onSubmit = { handleSubmit } >
                    <input minLength = '3' onChange = { this.handleChange } name = 'location' value = { this.state.location } />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Header)