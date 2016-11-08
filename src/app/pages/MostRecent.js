'use strict';

import React from 'react';

export default class MostRecent extends React.Component {
  render () {

    let data = this.props.data;
    let blogDate = data[0].date.join(' ');

    return(
        <div className='main div'>
          <div className='main-header'>
            <h2>{data[0].title}</h2>
            <h4 className='date'>{blogDate}</h4>
          </div>
          <div className='post'>
            {data[0].content.map( (paragraph, ind) =>
              <p key={ind}>
                {paragraph}
              </p>
            )}
          </div>
        </div>
    );
  }
}
