import {DateCalculator } from '../conversions/conversions'

export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILED = "FETCH_WEATHER_FAILED";
export const FETCH_TIDE_SUCCESS = "FETCH_TIDE_SUCCESS";
export const FETCH_TIDE_FAILED = "FETCH_TIDE_FAILED";


export const getWeather = () => {
  return async dispatch => {
    try {
      const lat = 26.2379;
      const lon = -80.1248;
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`);
      let weather = await response.json();
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: weather
      });
    } catch (err) {
      dispatch({
        type: FETCH_WEATHER_FAILED,
        payload: err
      });
    }
  };
};

export const getTides = () => {
  let { year, month, day, tomorrowDay, nextMo, nextYear } = DateCalculator();
  if (day.toString().length === 1) {
    day = `0${day}`
  }
  let noaaDate = `${year}${month}${day}`;
  let tomorrowDate = `${nextYear}${nextMo}${tomorrowDay}`;
  return async dispatch => {
    try {
      let response = await fetch(
        `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${noaaDate}&end_date=${tomorrowDate}&datum=MLLW&station=8722956&time_zone=lst_ldt&units=english&interval=hilo&format=json`
      );
      let tide = await response.json();
      dispatch({
        type: FETCH_TIDE_SUCCESS,
        payload: tide
      });
    } catch (err) {
      dispatch({
        type: FETCH_TIDE_FAILED,
        payload: err
      });
    }
  };
};

