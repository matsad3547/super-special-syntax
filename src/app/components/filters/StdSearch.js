'use strict';

import React from 'react';

export default class Sidebar extends React.Component {

  render () {

    let keywords = this.props.keywords;

    let months = this.props.months;

    return(
    <div className='std-search'>
      <div>
        <h3>Past Entries</h3>
        {months.map( (month) =>
          <li key={month} onClick={this.props.handleClickMonth} id={month}>
            {month}
          </li>)}
      </div>
      <div>
        <h3>Blog Topics</h3>
        {keywords.map( (keyword) =>
          <li key={keyword} onClick={this.props.handleClickTag} id={keyword}>
            {keyword}
          </li>)}
      </div>
    </div>
    );
  }
}
