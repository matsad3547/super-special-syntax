'use strict';

import React from 'react';
import $ from 'jquery';

export default class Sidebar extends React.Component {

  render () {

    $(document).ready(function() {
      $('.monthSel').click(function(){
        $('.monthMenu').slideDown(400, function(){
          $(this).click(function() {$('.sel').slideUp(400)});
        });
      });
    });

    $(document).ready(function() {
      $('.tagSel').click(function(){
        $('.tagMenu').slideDown(400, function(){
          $(this).click(function() {$('.sel').slideUp(400)});
        });
      });
    });

    let keywords = this.props.keywords

    let months = this.props.months;

    return(
    <div className="mobile-search">
      <div>
        <h3><a className='monthSel'>Past Entries</a></h3>
        <div className='monthMenu sel'>
        {months.map( (month) =>
          <li  key={month} onClick={this.props.handleClickMonth} id={month}>
            {month}
          </li>)}
        </div>
      </div>
      <div>
        <h3><a className='tagSel'>Blog Topics</a></h3>
        <div className='tagMenu sel'>
        {keywords.map( (keyword) =>
          <li  key={keyword} onClick={this.props.handleClickTag} id={keyword}>
            {keyword}
          </li>)}
        </div>
      </div>
    </div>
    );
  }
}
