"use strict";

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import app from './app.sass';
// import app from '../styles/app.sass';
import appCss from './appCss.css';
// import appCss from '../styles/appCss.css';
import blogData from '../blogData.json';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    let initDisp = 0;

    this.state = {
      mainDisp: initDisp,
      data: blogData,
      tag: null,
      month: null,
      blogDisplayed: null
    }
  };

  mainPageChange(mainDispVal, tagVal, monthVal, blogDisp) {
    this.setState({
      mainDisp: mainDispVal,
      tag: tagVal,
      month: monthVal,
      blogDisplayed: blogDisp
    })
  };

  render () {
    return (
      <div>
        <div className='container'>
          <Header mainPageChange={this.mainPageChange.bind(this)}/>
          <Main  data={this.state.data} month={this.state.month} tag={this.state.tag} blogDisplayed={this.state.blogDisplayed} mainDisp={this.state.mainDisp} mainPageChange={this.mainPageChange.bind(this)}/>
          <Sidebar data={this.state.data} mainPageChange={this.mainPageChange.bind(this)}/>
        </div>
        <Footer />
      </div>
    );
  }
}
