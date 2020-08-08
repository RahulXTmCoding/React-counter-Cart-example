import React, { Component } from 'react';

import Body from './components/Body';
import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <div className="container">
      <Body />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
