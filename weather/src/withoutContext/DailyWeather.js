import React, { Component } from 'react'


class DailyWeather extends Component {
    constructor(){
        super()
        this.state = {
            detailedView : false
        }
    }

    render(){

        let { id, weather_state_name, weather_state_abbr, wind_direction_compass, applicable_date, min_temp, max_temp, the_temp, wind_speed, wind_direction, air_pressure, humidity, visibility, predictability } = this.props.daysWeather


        console.log(this.props)
        return(
            <div>{applicable_date}</div>
        )
    }
}

export default DailyWeather

