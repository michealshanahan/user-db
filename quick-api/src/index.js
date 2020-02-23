import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import WeatherProvider from './WeatherProvider.js'

import App from './App.js'

ReactDOM.render(
    <WeatherProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </WeatherProvider>
    , document.getElementById('root')
)