import React from 'react';
import Clock from 'react-live-clock';

export default class Time extends React.Component {
  render() {
    return (
      <Clock
        className="clock"
        format={"ddd, MMM Do YYYY, h:mm a"}
        ticking={true}
        timezone={"US/Eastern"}
      />
    );
  }
}