import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo/Todo';
import Dashboard from './Dashboard/Dashboard';
// import NotFound from './NotFound/NotFound';
import NumberGuessing from './NumberGuessing/NumberGuessing';
import CurrencyConvertor from './CurrencyConvertor/CurrencyConvertor';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import QuotesGenerator from './QuotesGenerator/QuotesGenerator';

import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/app" component={App} />
      <Route path="/todo" component={Todo} />
      <Route path="/currency-convertor" component={CurrencyConvertor} />
      <Route path="/number-guessing" component={NumberGuessing} />
      <Route path="/checkout-page" component={CheckoutPage} />
      <Route path="/quotes-generator" component={QuotesGenerator} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
