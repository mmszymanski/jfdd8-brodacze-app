import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import App from './App';
import DonutChart from './DonutChart'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <switch>
        <Route exact path="/" component={App}/>
        <Route path="/donut" component={DonutChart}/>
      </switch>

      <p>&copy; 2017 BrodaczeGroup</p>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
