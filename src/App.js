import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';


import Facebook from './Component/Facebook';

  class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OAuth 2.0  Framework using FB</h1>
          <p>
            This App Authenticates with Facebook
            
            <Facebook/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
