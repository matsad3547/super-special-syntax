'use strict';

import React from 'react';

export default class ByMonth extends React.Component {

  render () {

      const displayDate = this.props.displayDate;

      let data = this.props.data;

      let blogInd = this.props.blogDisplayed;

    return(
        <div className='main div'>
          <div className='main-post'>
            <div className='main-header'>
              <h2>{data[blogInd].title}</h2>
              <h4 className='date'>{displayDate(data[blogInd].date)}</h4>
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
