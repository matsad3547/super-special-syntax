'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import App from './components/App';

const app = document.getElementById('app');

render(<App />, app);
