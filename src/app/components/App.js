"use strict";

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}
