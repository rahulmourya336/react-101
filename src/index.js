import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo/Todo';
import Dashboard from './Dashboard/Dashboard';
import NumberGuessing from './NumberGuessing/NumberGuessing';
import QuotesGenerator from './QuotesGenerator/QuotesGenerator';

import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import notFound from './NotFound/NotFound';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/todo" component={Todo} />
      <Route path="/number-guessing" component={NumberGuessing} />
      <Route path="/quotes-generator" component={QuotesGenerator} />
      <Route path='/404' component={notFound} />
      <Redirect from='*' to='/404' />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
reportWebVitals();
