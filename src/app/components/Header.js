'use strict';

import React from 'react';
import $ from 'jquery';

export default class Header extends React.Component {

  handleClick(clicked_id){
    let id = clicked_id.target.id
    var mainDisp;
    if (id === 'home'){
      mainDisp = 0;
    }
    else if (id === 'about'){
      mainDisp = 3;
    }
    else if (id === 'contact') {
      mainDisp = 4;
    }
    this.props.mainPageChange(mainDisp, null, null);
};

  render () {

    $(document).ready(function() {
      $('.menu').click(function(){
        $('.menu-items').slideDown(400, function(){
          $(this).click(function() {$(this).slideUp(400)});
        });
      });
    });

    return(
      <div className='header div'>
        <div>
          <h1>SuperSpecialSyntax</h1>
          <h4>by Matt Sadauckas</h4>
        </div>
        <div className='button div'>
          <div className='menu-btn'><a className='menu'><i className="fa fa-bars" aria-hidden="true"></i></a>
          </div>
          <ul className='menu-items'>
            <li id='home' onClick={this.handleClick.bind(this)}>Home</li>
            <li id='about' onClick={this.handleClick.bind(this)}>About</li>
            <li id='contact' onClick={this.handleClick.bind(this)}>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}
