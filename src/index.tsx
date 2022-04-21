import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/@fortawesome/fontawesome-pro/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-pro/js/all.js';
import '../node_modules/@fortawesome/fontawesome-pro/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-pro/js/all.js';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import TransactionsReducer from '../src/store/reducers/transactions';
import ProfileReducer from '../src/store/reducers/profile';
import CardBalanceReducer from '../src/store/reducers/cardBalance';

const combineReducer = combineReducers({
  TransactionsReducer,
  ProfileReducer,
  CardBalanceReducer,
});
const walletstore = createStore(combineReducer);

ReactDOM.render(
  <Provider store={walletstore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
