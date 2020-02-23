import React from 'react'
import EnterLocation from './EnterLocation'
import WeatherDisplay from './WeatherDisplay'
import WeatherCard from './WeatherCard.js'

import { Switch, Route } from 'react-router-dom'

const App = ()=> {
    return(
        <div>
            <EnterLocation />
            <Switch>
                
                <Route exact path = '/' component = { WeatherDisplay } />
                <Route path = { '/location/:location' } component = { WeatherCard } />\

            </Switch>
        </div>
    )
}


export default App