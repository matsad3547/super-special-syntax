"use strict";

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import app from './app.sass';
import appCss from './appCss.css';
import blogData from './blogData.json'

console.log(blogData[0].date);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: blogData
    }
  }

  render () {
    return (
      <div>
        <div className='container'>
          <Header />
          <Main data={this.state.data}/>
          <Sidebar data={this.state.data}/>
        </div>
        <Footer />
      </div>
    );
  }
}
