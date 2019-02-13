import weatherReducer from "./weatherReducer";
import tideReducer from "./tideRdc"
import { combineReducers } from "redux";

export default combineReducers({ weatherReducer, tideReducer });
