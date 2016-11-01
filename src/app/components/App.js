"use strict";

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}
