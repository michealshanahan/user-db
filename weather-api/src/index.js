import React from 'react'
import ReactDOM from 'react-dom'

import WeatherProvider from './WeatherProvider.js'

import App from './App.js'

ReactDOM.render( 
    <WeatherProvider>
        <App />
    </WeatherProvider>
    , document.getElementById('root')
)