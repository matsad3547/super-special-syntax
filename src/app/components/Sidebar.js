'use strict';

import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'

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

  handleClickMonth(clicked_id){
  var mainDisp = 1;
  let month = clicked_id.target.id
  this.props.mainPageChange(mainDisp, null, month);
};

  handleClickTag(clicked_id){
  var mainDisp = 2;
  console.log('handle click tag: ',clicked_id);
  let tag = clicked_id.target.id
  this.props.mainPageChange(mainDisp, tag);
  };

  render () {

    let dataObj = this.props.data;

    let keywords = getObjArrProps(dataObj, 'tags')

    let months = getObjMonths(dataObj);

    return(
    <div className="sidebar div">
      <div>
        <h3>Past Entries</h3>
        {/* this is a comment */}
        {months.map( (month) =>
          <li key={month} onClick={this.handleClickMonth.bind(this)} id={month}><Link to='/ByMonth/'>
            {month}
          </Link></li>)}
      </div>
      <div>
        <h3>Blog Topics</h3>
        {keywords.map( (keyword) =>
          <li key={keyword} onClick={this.handleClickTag.bind(this)} id={keyword}><Link to='/ByTag'>
            {keyword}
          </Link></li>)}
      </div>
    </div>
    );
  }
}
// <Match pattern='/ByMonth' component={ByMonth}/>

// {months.map( (month) =>
//   <li key={month} onClick={this.handleClickMonth.bind(this)} id={month}>
//     {month}
//   </li>)}

// {keywords.map( (keyword) =>
//   <li key={keyword} onClick={this.handleClickTag.bind(this)} id={keyword}>
//     {keyword}
//   </li>)}
