import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import MultipleLocations from './Results'
import DailyWeather from './DailyWeather'



const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path = '/' component = { Home } />
                <Route path = {`/search/:location`} component = {MultipleLocations} />
            </Switch>
        </div>
    )
}

export default App



// Working to get component Results to rerender after search