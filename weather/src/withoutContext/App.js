import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Results from './Results'


const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path = '/' component = { Home } />
                <Route path = {`/search/:location`} component = { Results } />
            </Switch>
            
        </div>
    )
}

export default App
