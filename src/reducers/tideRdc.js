import {
  FETCH_TIDE_FAILED,
  FETCH_TIDE_SUCCESS
} from "../actions/actions";

const initialState = [];

const tideReducer = (state = initialState, { type, payload }) => {
  console.log("tide reducer payload:", type, payload);
  switch (type) {
    case FETCH_TIDE_SUCCESS:
      return [...initialState, payload];
    case FETCH_TIDE_FAILED:
      return payload;
    default:
      return state;
  }
};


export default tideReducer;