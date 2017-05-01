import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import appReducers from './reducers'
import { createStore } from 'redux'
import axios from 'axios';

const store = createStore(appReducers)
const rootEL = document.getElementById('root')

const render = () => ReactDOM.render(
  <App  state={ store.getState() }
  onURLSLoaded={(data) => store.dispatch({ type: 'URLS_LOADED' , data:data})}
  onButtonClicked={ () =>  {   
    console.log("onButtonClicked");
    axios.get(store.getState().backend_url)
      .then(res => {
        console.log(res.data);
        store.dispatch({ type: 'BUTTON_CLICKED' })
      }) 
  }
  }
  />,
  rootEL
);

render()
store.subscribe(render)
