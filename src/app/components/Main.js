'use strict';

import React from 'react';
import MostRecent from '../pages/MostRecent';
import ByMonth from '../pages/ByMonth';
import ByTag from '../pages/ByTag';

export default class Main extends React.Component {
  render () {
    return(
      <MostRecent data={this.props.data}/>

    );
  }
}
