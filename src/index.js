import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo/Todo';
import NotFound from './NotFound/NotFound';
import CurrencyConvertor from './CurrencyConvertor/CurrencyConvertor';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route path="#/app" component={App} />
      <Route path="#/todo" component={Todo} />
      <Route path="#/currency-convertor" component={CurrencyConvertor} />
      <Route path="" component={NotFound} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
