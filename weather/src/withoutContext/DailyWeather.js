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
            let date = parseInt(applicable_date.slice(8))
            let today = new Date().getDate()
            if(date === today){
                return(
                    <div key  = {this.props.id}>
                        Today
                    </div>
                )
            }else if (date === (today + 1)){
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

        let convertTemp = (degrees)=> {
            if(this.props.celcius === false){
                return (Math.floor((degrees * 9/5) + 32)+'°')
            }else{
                return (Math.round(degrees) +'°' )
            }
        }

        let convertMph = (mph)=> {
            if(!this.props.celcius){
                return ( Math.round(mph) + ' MPH' )
            }else{
                return( Math.round(mph * 1.60934) +' KPH' )
            }
        }

        let toggle = (toToggle)=>{this.setState((prev)=>({[toToggle]: !prev[toToggle]}))}

        let detailedView =()=>{
            if(this.state.detailedView){
                return(
                    <div>
                        <h3>
                            {weatherToday()}
                        </h3>
                        <h6>{weather_state_name}</h6>
                        <img src={`http://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`} alt = {weather_state_abbr} />
                        <br/>
                        Low: {convertTemp(min_temp)}
                        <br/>
                        High: {convertTemp(max_temp)}
                        <div>{convertMph(wind_speed)} {wind_direction_compass} </div>
                    </div>
                )
            } else {
                return(
                    <div>
                        <h3>
                            {weatherToday()}
                        </h3>
                        <h5>Temp: {convertTemp(the_temp)}</h5>
                        <img src={`http://www.metaweather.com/static/img/weather/png/64/${weather_state_abbr}.png`} alt = {weather_state_abbr} />
                        <br/>
                        Low: {convertTemp(min_temp)}
                        <br/>
                        High: {convertTemp(max_temp)}
                    </div>
                )
            }
        }

        return(
            <div onClick = {()=>{toggle('detailedView')}}> 
                {detailedView()}
            </div>
        )
    }
}

export default DailyWeather

