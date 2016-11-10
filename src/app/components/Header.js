'use strict';

import React from 'react';

export default class Header extends React.Component {

  handleClick(clicked_id){
    let id = clicked_id.target.id
    var mainDisp;
    if (id === 'home'){
      mainDisp = 0;
    }
    else if (id === 'about'){
      mainDisp = 4;
    }
    this.props.mainPageChange(mainDisp, null, null);
};

  render () {
    return(
      <div className='header div'>
        <div>
          <h1>SuperSpecialSyntax</h1>
          <h4>by Matt Sadauckas</h4>
        </div>
        <div className='button div'>
          <ul>
            <li id='home' onClick={this.handleClick.bind(this)}>Home</li>
            <li id='about' onClick={this.handleClick.bind(this)}>About</li>
          </ul>
        </div>
      </div>
    );
  }
}
