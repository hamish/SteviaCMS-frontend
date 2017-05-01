import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)
store.subscribe(() =>
  console.log(store.getState())
)

class App extends Component {
  constructor(){
    super();

  }
  componentDidMount() {
    console.log("componentDidMount")
    const { state, onURLSLoaded, onButtonClicked} = this.props

    axios.get(`backend.json`)
      .then(res => {
        console.log(res.data);
        onURLSLoaded(res.data)
      });
  }

  render() {
    const { state, onURLSLoaded, onButtonClicked } = this.props
    console.log(state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Current State: {state.current_state}<br />
          Backend Url: {state.backend_url}<br />
          <button onClick={onButtonClicked}>Hello</button>

        </p>
      </div>
    );
  }
}

export default App;
