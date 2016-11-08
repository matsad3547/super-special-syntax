'use strict';

import React from 'react';

function rmvDups(arr) {
  let newArr = [];
  arr.map( function(item){
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  } )
  return newArr;
};

function getObjMonths (arrOfObj) {
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

//gets an array of object properties within a larger object
function getObjArrProps (arrOfObj, keyVal) {
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

const linkListItem = (arr, fun) => {arr.map( (item) =>
  <li key={item} onClick={fun} id={item}>
    {item}
  </li>
)};

export default class Sidebar extends React.Component {

  clicker(clicked_id) {console.log(clicked_id.target.id)};


  handleClickMonth(clicked_id){
  var mainDisp = 1;
  console.log(clicked_id.target.id);
  let month = clicked_id.target.id
  this.props.mainPageChange(mainDisp, null, month);
};

  handleClickTag(clicked_id){
  var mainDisp = 2;
  console.log(clicked_id.target.id);
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
        {months.map( (month) =>
          <li key={month} onClick={this.handleClickMonth.bind(this)} id={month}>
            {month}
          </li>)}
      </div>
      <div>
        <h3>Blog Topics</h3>
        {keywords.map( (keyword) =>
          <li key={keyword} onClick={this.handleClickTag.bind(this)} id={keyword}>
            {keyword}
          </li>)}
      </div>
    </div>
    );
  }
}
