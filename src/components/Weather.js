import React from "react";
import Time from "./Time";
import { connect } from "react-redux";
import {TempConversion, WindConversion} from '../conversions/conversions'
const Spinner = require('react-spinkit');


const Weather = (weather) => {
  let data;
  if (weather.weather[0] === undefined) {
    return <Spinner className="spinner" name="line-scale" color="teal" />;
  } else {
    data = weather.weather[0]
    console.log("data:", data)
  }

  let rain = (+data.rain["1h"]/25.4).toFixed(2)
  
  // let name = weather.weather
    return (
      <div className="weather">
        Weather for: {data.name}, FL
        <br />
        <Time />
        <div>
          {" "}
          Current conditions: {TempConversion(data.main.temp)}F, Humidity: {data.main.humidity}%
          <br />
          High: {TempConversion(data.main.temp_max)}F
          <br />
          Low: {TempConversion(data.main.temp_min)}F
        </div>
        <div>Wind: {data.wind.speed}mph from {WindConversion(data.wind.deg)}</div>
        <br />
        {rain > 0 ? (
          <div>Rain over the next hour: {rain}in</div>
        ) : (
          <div>{data.weather[0].main}</div>
        )}
      </div>
    );
}

const mapStateToProps = (state, props) => ({
  weather: state.weatherReducer
})

export default connect(mapStateToProps)(Weather);