'use strict';

import React from 'react';

let months = '<array of months>';
let topics = '<array of topics>';

export default class Sidebar extends React.Component {
  render () {
    return(
    <div id="sidebar">
      <h3>Past Entries</h3>
        <ul>
        {months}
        </ul>
      <h3>Blog Topics</h3>
        <ul>
        {topics}
        </ul>
    </div>
    );
  }
}
