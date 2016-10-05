import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import './index.css';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk),window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
