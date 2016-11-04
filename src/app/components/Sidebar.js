'use strict';

import React from 'react';

let months = ['October', 'November'];
let topics = ['Stuff', 'Things'];

const monthList = (month) => console.log(month);

const linkListItem = (arr, monthList) => (arr.map( (item) =>
  <li key={item} onClick={monthList}>
    {item}
  </li>
));

export default class Sidebar extends React.Component {
  render () {
    return(
    <div className="sidebar div">
      <div>
        <h3>Past Entries</h3>
        {linkListItem(months, monthList)}
      </div>
      <div>
        <h3>Blog Topics</h3>
        {linkListItem(topics)}
      </div>
    </div>
    );
  }
}
