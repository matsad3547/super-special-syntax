'use strict';

import React from 'react';

let currentBlogTitle = 'Things and Stuff are Neat-o!';
let blogDate = 'November 2, 2016';

export default class Main extends React.Component {
  render () {
    return(
    <div className='main div'>
      <div className='main-header'>
        <h2>{this.props.data[0].title}</h2>
        <h4 className='date'>{blogDate}</h4>
      </div>
      <div className='post'>
        {this.props.data[0].content.map( (paragraph, ind) =>
          <p key={ind}>
            {paragraph}
          </p>
        )}
      </div>
    </div>
    );
  }
}
