import {
  FETCH_WEATHER_FAILED,
  FETCH_WEATHER_SUCCESS
} from "../actions/actions";

const initialState = [];

const weatherReducer = (state = initialState, { type, payload }) => {
  console.log("weather reducer payload:", type, payload);
  switch (type) {
    case FETCH_WEATHER_SUCCESS:
      return [...initialState, payload];
    case FETCH_WEATHER_FAILED:
      return payload;
    default:
      return state;
  }
};


export default weatherReducer;