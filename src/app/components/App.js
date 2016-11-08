"use strict";

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import app from './app.sass';
import appCss from './appCss.css';
import blogData from './blogData.json';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: blogData,
      mainDisp: 1
    }
  }

  render () {
    return (
      <div>
        <div className='container'>
          <Header />
          <Main mainDisp={this.state.mainDisp} data={this.state.data}/>
          <Sidebar data={this.state.data}/>
        </div>
        <Footer />
      </div>
    );
  }
}
