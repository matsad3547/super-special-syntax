'use strict';

import React from 'react';
import MostRecent from '../pages/MostRecent';
import ByMonth from '../pages/ByMonth';
// <ByMonth data={this.props.data}/>

export default class Main extends React.Component {
  render () {
    return(
      <ByMonth data={this.props.data}/>

    );
  }
}
