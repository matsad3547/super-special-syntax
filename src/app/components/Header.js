'use strict';

import React from 'react';

let currentBlogTitle = '<Working Blog Title>';
let blogDate = '<blog published date>';

export default class Header extends React.Component {
  render () {
    return(
    <div class='header'>
      <h1>Demo Blog</h1>
      <p><span>by Matt Sadauckas</span></p>
      <h2>{currentBlogTitle}</h2>
      <p>{blogDate}</p>
    </div>
    );
  }
}
