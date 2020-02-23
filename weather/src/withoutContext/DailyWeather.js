import React, { Component } from 'react'


class DailyWeather extends Component {
    constructor(){
        super()
        this.state = {
            detailedView : false,
            metric: false
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
                        {applicable_date.slice(5)}
                    </div>

                )
            }
        }

        let convertTemp = (celcius)=> {
            if(this.state.metric === false){
                return (Math.floor((celcius*9/5) + 32)+'°')
            }else{
                return (celcius+'°' )
            }
        }
        let toggle = (toToggle)=>{this.setState((prev)=>({[toToggle]: !prev[toToggle]}))}

        return(
            <div> 
                <button onClick = { ()=> console.log(this.props.toggleCelcius)}>DailyWeather Props</button>
                <h3>
                    {weatherToday()}
                </h3>
                <img src={`http://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`} alt = {weather_state_abbr} />
                <br/>
                Low: {convertTemp(min_temp)}
                <br/>
                High: {convertTemp(max_temp)}
            </div>
        )
    }
}

export default DailyWeather

