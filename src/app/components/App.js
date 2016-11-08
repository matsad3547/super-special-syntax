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
      mainDisp: 2,
      tag: 'puppies',
      month: 'October'
    }
  }

  render () {
    return (
      <div>
        <div className='container'>
          <Header />
          <Main  data={this.state.data} month={this.state.month} tag={this.state.tag} mainDisp={this.state.mainDisp}/>
          <Sidebar data={this.state.data}/>
        </div>
        <Footer />
      </div>
    );
  }
}
