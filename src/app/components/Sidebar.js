'use strict';

import React from 'react';

let months = ['October', 'November'];
let topics = ['Stuff', 'Things'];

const listItem = (arr) => (arr.map( (item) =>
  <li key={item}>
    {item}
  </li>
));

export default class Sidebar extends React.Component {
  render () {
    return(
    <div id="sidebar">
      <h3>Past Entries</h3>
        {listItem(months)}
      <h3>Blog Topics</h3>
        {listItem(topics)}
    </div>
    );
  }
}
