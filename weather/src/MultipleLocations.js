import React, { Component } from 'react'

class MultipleLocations extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    
    render(){
        let searchParameter = JSON.stringify(this.props.match.url)
        console.log(searchParameter)
        return(
            <div> Multi</div>
        )

    }
}

export default MultipleLocations