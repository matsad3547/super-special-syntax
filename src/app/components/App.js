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
    let initDisp = 0;

    this.state = {
      mainDisp: initDisp,
      data: blogData,
      tag: null,
      month: null
    }
  };

  mainPageChange(mainDispVal, tagVal, monthVal) {
    this.setState({
      mainDisp: mainDispVal,
      tag: tagVal,
      month: monthVal
    })
  };

  render () {
    return (
      <div>
        <div className='container'>
          <Header mainPageChange={this.mainPageChange.bind(this)}/>
          <Main  data={this.state.data} month={this.state.month} tag={this.state.tag} mainDisp={this.state.mainDisp} />
          <Sidebar data={this.state.data} mainPageChange={this.mainPageChange.bind(this)}/>
        </div>
        <Footer />
      </div>
    );
  }
}
