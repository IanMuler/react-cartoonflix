import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';

const initialState = {
  "myList": {
    "courage": [],
    "woody": [],
    "ranger": []
  }
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);