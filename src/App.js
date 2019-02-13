import React, { Component } from 'react';
import {Badge, Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Tide from './components/Tide'
import Weather from './components/Weather'
import Moon from './components/Moon'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Row>
            <Col>  <Weather /></Col>
            <Col> <Tide /></Col> 
        </Row>
        <Moon />
        </Container>
      </div>
    );
  }
}

export default App;
