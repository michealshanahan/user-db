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

        let weatherToday = ()=> {
            let date = applicable_date.slice(8)
            let today = new Date().getDate()
            if(date == today){
                return(
                    <div key  = {this.props.id}>
                        Today
                    </div>
                )
            }else if (date == (today + 1)){
                return(
                    <div key = {this.props.id}>
                        Tomorrow
                    </div>
                )
            }else {
                return(
                    <div key = {this.props.id}>
                        {applicable_date}
                    </div>

                )
            }
        }

        return(
            <div> {weatherToday()}
            
            </div>
        )
    }
}

export default DailyWeather

