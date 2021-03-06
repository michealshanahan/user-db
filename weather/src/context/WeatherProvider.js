import React, { Component } from 'react'
const { Consumer, Provider } = React.createContext()


class WeatherProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Provider value = {{...this.state}}>
                {this.props.children}
            </Provider>
        )
    }
}

export default WeatherProvider
export const withReservations = ( C ) => {
    return( props ) =>
    <Consumer>
        { value => <C { ...value } { ...props} />}
    </Consumer>
}