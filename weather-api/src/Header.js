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

    render(){
        return(
            <div className = "header">
                <div className = "formContainer">
                    <form>
                        <input onChange = { this.handleChange } />
                    </form>
                </div>
                Allo
            </div>
        )
    }
}


export default Header

