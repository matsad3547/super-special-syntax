'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import App from './components/App';

// import stuff from '../test.json';
// console.log(stuff);

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={ hashHistory}>
    <Router path='/' component={App}>
    </Router>
  </Router>, app);
// (<App />, app);
