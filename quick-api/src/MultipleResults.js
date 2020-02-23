import React from 'react'
import { withWeather } from './WeatherProvider'

const MultipleResults = ( props )=> {
    let handleClick = (city)=> {
        props.getWoeid(city)
    }
    
    let mappedLocations = ()=>{
        return props.locations.map((city, index) =>{

            return(
            <button key = { city.id } onClick = {()=>handleClick(city)} >{city.title}</button>
            )
        })
    }
    return(
        <div>Please select one:
            { mappedLocations() }
        </div>
    )
}

export default withWeather(MultipleResults)