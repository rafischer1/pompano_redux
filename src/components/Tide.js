import React from 'react'
import {FormatDateApi} from '../conversions/conversions'
import { connect } from "react-redux";
const Spinner = require("react-spinkit");

const Tide = ({tide}) =>  {
    console.log("this.state tide:", tide)
    if (tide[0] === undefined) {
      return <Spinner className="spinner" name="line-scale" color="teal" />;
    }
  return <div className="tide">Tide Data<table>
  <tbody>
    <tr>
      {tide[0].predictions.map((day) => {
        return <td>{`${FormatDateApi(day.t)} `}</td>
      })}
    </tr>
    <tr>
      {tide[0].predictions.map((day) => {
          return <td>{day.type}</td>
      })}
    </tr>
         <tr>
      {tide[0].predictions.map((day) => {
          return <td>{day.v}ft</td>
      })}
         </tr>
         </tbody>
         </table>
         </div>
 
 
      
 
    
}

const mapStateToProps = (state, props) => ({
  tide: state.tideReducer
  })



export default connect(
  mapStateToProps)(Tide)