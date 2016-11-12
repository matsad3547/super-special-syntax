'use strict';

import React from 'react';
import StdSearch from './filters/StdSearch';
import MobileSearch from './filters/MobileSearch';

const rmvDups = (arr) => {
  let newArr = [];
  arr.map( function(item){
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  } )
  return newArr;
};

const getObjMonths = (arrOfObj) => {
  let propArr = [];
  arrOfObj.map( function(obj){
    for(let key in obj){
      if (key === 'date') {
        propArr.push(obj.date[0]);
      }
    }
  })
  propArr = rmvDups(propArr);
  return propArr;
};

const getObjArrProps = (arrOfObj, keyVal) => {
  let propArr = [];
  arrOfObj.map( function(obj){
    for(let key in obj){
      if (key === keyVal) {
        obj[key].map( (item) => propArr.push(item));
      }
    }
  })
  propArr = rmvDups(propArr);
  return propArr;
};

export default class Sidebar extends React.Component {


  render () {

    const handleClickMonth = (clicked_id) => {
      var mainDisp = 1;
      let month = clicked_id.target.id
      this.props.mainPageChange(mainDisp, null, month);
    };

    const handleClickTag = (clicked_id) => {
      var mainDisp = 2;
      let tag = clicked_id.target.id
      this.props.mainPageChange(mainDisp, tag);
    };

    let dataObj = this.props.data;

    let keywords = getObjArrProps(dataObj, 'tags')

    let months = getObjMonths(dataObj);

    return(
      <div className="sidebar div">
        <StdSearch
          keywords={keywords}
          months={months}
          handleClickMonth={handleClickMonth}
          handleClickTag={handleClickTag} mainPageChange={this.props.mainPageChange}/>
        <MobileSearch
          keywords={keywords}
          months={months}
          handleClickMonth={handleClickMonth}
          handleClickTag={handleClickTag}
          mainPageChange={this.props.mainPageChange}/>
      </div>
    );
  }
}
