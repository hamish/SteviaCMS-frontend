import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    current_state:"initial"
  };

  constructor(){
    super();
    var myself=this;
    setTimeout(function(){ console.log("timeout: second state");  myself.setState(prevState => ({
      current_state: "second State"
    }));
    }, 3000);

  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Current State: {this.state.current_state}
        </p>
      </div>
    );
  }
}

export default App;
