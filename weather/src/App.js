import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import MultipleLocations from './MultipleLocations'
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



//Shouldbe able to push to history in header. And now to splice the search from the props, and do an axios call with it onrender