'use strict';

import React from 'react';
import MostRecent from '../pages/MostRecent';
import ByMonth from '../pages/ByMonth';
import ByTag from '../pages/ByTag';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default class Main extends React.Component {


  render () {

    const ChooseRender = (props) => {
      let mainDisp = this.props.mainDisp;
      if(mainDisp === 1) {
        return <ByMonth data={this.props.data} month={this.props.month}/>;
      }
      else if (mainDisp === 2) {
        return <ByTag data={this.props.data} tag={this.props.tag}/>;
      }
      else if (mainDisp === 3) {
        return <About />;
      }
      else if (mainDisp === 4) {
        return <Contact />;
      }
      return <MostRecent data={this.props.data}/>;
    };

    return(
    <ChooseRender />
    );
  }
}
