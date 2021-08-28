import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware , createStore} from 'redux';
import {Provider} from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/App'


import reducers from './todo/todoReducers/reducers'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
// install thunk e redux-multi
const store = applyMiddleware(thunk , multi  ,promise)(createStore)(reducers, devTools)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



