import React, { Component } from 'react'
import { render } from '@testing-library/react'

const { Consumer, Provider } = React.createContext()

class WeatherProvider extends Component {
    constructor(){
        super()
        this.state = {
    
        }
        render(){
            
        }
    }
    
    render(){
        return(
            <Provider value = {{...this.state,
                                
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
                    }{
                        ...props
                    } />
            }
        </Consumer>
}