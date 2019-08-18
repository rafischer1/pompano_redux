import React from 'react';
import { XYPlot, YAxis, LineSeries, MarkSeries, Hint } from 'react-vis';
const Spinner = require('react-spinkit');

export default class LineGraphTide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { Date: Date, Feet: 0.0 }
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({
      value: {
        Date: this.props.datesArr[value.x - 1],
        Feet: value.y.toFixed(2)
      }
    });
  };
  render() {
    console.log('this props:', this.props.tide[0].predictions);
    const tideArr = this.props.tide[0].predctions;
    let count = 0;
    let dataArr = [];
    if (tideArr === undefined || tideArr.length === 0) {
      return (
        <Spinner
          className='spinner'
          name='double-bounce'
          color='aqua'
          style={{
            width: '50px',
            height: '50px',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '5%'
          }}
        />
      );
    } else {
      dataArr = tideArr.map(day => {
        count++;
        return {
          x: count,
          y: +day.v
        };
      });
      console.log('data arr:', tideArr);
    }

    const { value } = this.state;

    const lineData = [
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
      { x: 6, y: 4 },
      { x: 7, y: 4 }
    ];

    return (
      <div className='tideChartMedia'>
        <XYPlot width={350} height={150} yDomain={[-2, 6]}>
          <YAxis
            style={{ color: 'white' }}
            title='Tide FT'
            tickValues={[-2, 0, 2, 4, 6]}
          />
          <LineSeries
            data={lineData}
            style={{ stroke: '#F37B6F', strokeWidth: 2 }}
          />

          <MarkSeries
            onNearestX={this._rememberValue}
            data={dataArr}
            style={{ stroke: 'black', strokeWidth: 1 }}
          />
          <LineSeries
            onValueMouseOver={this._rememberValue}
            onValueMouseOut={this._forgetValue}
            data={dataArr}
            curve={'curveMonotoneX'}
            style={{ stroke: '#7C97FB  ', strokeWidth: 2, fill: 'none' }}
          />
          <Hint value={value} align={{ vertical: Hint.ALIGN.AUTO }} />
        </XYPlot>
      </div>
    );
  }
}
