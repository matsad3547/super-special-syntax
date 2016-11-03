"use strict";

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import app from './app.sass';
import appCss from './appCss.css';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div className='container'>
          <Header />
          <Main />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}
