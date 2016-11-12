'use strict';

import React from 'react';
import MostRecent from '../pages/MostRecent';
import DisplaySpecBlog from '../pages/DisplaySpecBlog';
import ByMonth from '../pages/ByMonth';
import ByTag from '../pages/ByTag';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default class Main extends React.Component {


  render () {

    const handleClickDispBlog = (clicked_id) => {
      var mainDisp = 5;
      let blogDisp = clicked_id.target.id;
      console.log(blogDisp);
      this.props.mainPageChange(mainDisp, null, null, blogDisp);
    };

    const ChooseRender = (props) => {
      let mainDisp = this.props.mainDisp;
      if(mainDisp === 1) {
        return <ByMonth data={this.props.data} month={this.props.month} handleClickDispBlog={handleClickDispBlog}/>;
      }
      else if (mainDisp === 2) {
        return <ByTag data={this.props.data} tag={this.props.tag} handleClickDispBlog={handleClickDispBlog}/>;
      }
      else if (mainDisp === 3) {
        return <About />;
      }
      else if (mainDisp === 4) {
        return <Contact />;
      }
      else if (mainDisp === 5) {
        return <DisplaySpecBlog blogDisplayed={this.props.blogDisplayed} data={this.props.data}/>;
      }
      return <MostRecent data={this.props.data}/>;
    };

    return(
    <ChooseRender />
    );
  }
}
