'use strict';

import React from 'react';

let currentBlogTitle = 'Things and Stuff are Neato!';
let blogDate = 'November 2, 2016';

export default class Main extends React.Component {
  render () {
    return(
    <div className='main'>
      <div className='main header'>
        <h2>{currentBlogTitle}</h2>
        <p className='date'>{blogDate}</p>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    );
  }
}
