import React, { Component } from "react"
import { withWeather } from "./WeatherProvider.js"
import Axios from 'axios'

class DailyWeatherCard extends Component {
    constructor(){
        super()
        this.state = {
            detailedView: false,
            forecast: {}
        }
    }
   
    componentDidMount(){
        Axios.get().then((res)=> this.setState({
            forecast : res.data
        }))
    }

    
    render(){

        let fahrenheitConverter = (celcius)=>{
            return (celcius * 9/5 + 32)
        } 
        let {
            air_pressure,
            applicable_date,
            created,
            humidity,
            id,
            max_temp,
            min_temp,
            predictability,
            the_temp,
            visibility,
            weather_state_abbr,
            weather_state_name,
            wind_direction,
            wind_direction_compass,
            wind_speed
        } = this.props.daysWeather

        
        let today = new Date().getDay()
    
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        let forecastDate = (new Date(applicable_date).getDay() +1 )
        let dateTodisplay
        switch ( forecastDate ) {
            case (today):
                dateTodisplay = "Today"
                break;
            case ( today +1 ):
                dateTodisplay = "Tomorrow"
                break;
            case forecastDate:
                dateTodisplay = daysOfWeek[forecastDate]
                break;
        
            default:
                break;
        }
        

        return(
            <div onClick = {()=> this.toggle(`detailedView`)}>
                <div>
                    { dateTodisplay }
                    <br/>       
                </div>
                { weather_state_name }
                <br/>
                High: { Math.floor(fahrenheitConverter(max_temp)) }° F 
                <br/>
                Low: { Math.floor(fahrenheitConverter(min_temp)) }° F 
                <br/>
                Wind: { Math.floor(wind_speed) }mph 
                <button onClick = {()=> console.log(dateTodisplay)} >Daily</button>
            </div>
        )

    }
}

export default withWeather(DailyWeatherCard)