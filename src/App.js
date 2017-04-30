import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state ={
      current_state:"initial"
    };
  }
  

  componentDidMount() {
    axios.get(`backend.json`)
      .then(res => {
        console.log(res);
        this.setState( {current_state: "two",
          backend_url:res.data.backend_url} );

        // const posts = res.data.data.children.map(obj => obj.data);
        // this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Current State: {this.state.current_state}<br />
          Backend Url: {this.state.backend_url}

        </p>
      </div>
    );
  }
}

export default App;
