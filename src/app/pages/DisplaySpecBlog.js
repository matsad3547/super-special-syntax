'use strict';

import React from 'react';

export default class ByMonth extends React.Component {

  render () {

      let data = this.props.data;
      let blogInd = this.props.blogDisplayed;
      let blogDate = data[blogInd].date.join(' ');

    return(
        <div className='main div'>
          <div className='main-post'>
            <div className='main-header'>
              <h2>{data[blogInd].title}</h2>
              <h4 className='date'>{blogDate}</h4>
            </div>
            <div className='post'>
              {data[blogInd].content.map( (paragraph, ind) =>
                <p key={ind}>
                  {paragraph}
                </p>
              )}
            </div>
          </div>
        </div>
    );
  }
}
