'use strict';

import React from 'react';
import MostRecent from '../pages/MostRecent';

let currentBlogTitle = 'Things and Stuff are Neat-o!';
let blogDate = 'November 2, 2016';

export default class Main extends React.Component {
  render () {
    return(
      <MostRecent data={this.props.data}/>

    );
  }
}
