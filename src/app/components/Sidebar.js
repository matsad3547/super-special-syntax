'use strict';

import React from 'react';

let months = ['October', 'November'];
let topics = ['Stuff', 'Things'];

const linkListItem = (arr) => (arr.map( (item) =>
  <li key={item}><a href={item}>
    {item}
  </a></li>
));

export default class Sidebar extends React.Component {
  render () {
    return(
    <div className="sidebar div">
      <div>
        <h3>Past Entries</h3>
        {linkListItem(months)}
      </div>
      <div>
        <h3>Blog Topics</h3>
        {linkListItem(topics)}
      </div>
    </div>
    );
  }
}
