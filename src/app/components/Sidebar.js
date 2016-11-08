'use strict';

import React from 'react';

const clicker = (clicked_id) => console.log(clicked_id.target.id);

const linkListItem = (arr) => (arr.map( (item) =>
  <li key={item} onClick={clicker} id={item}>
    {item}
  </li>
));

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

export default class Sidebar extends React.Component {


  render () {
    let dataObj = this.props.data;

    let keywords = getObjArrProps(dataObj, 'tags')

    let months = getObjMonths(dataObj);

    return(
    <div className="sidebar div">
      <div>
        <h3>Past Entries</h3>
        {linkListItem(months)}
      </div>
      <div>
        <h3>Blog Topics</h3>
        {linkListItem(keywords)}
      </div>
    </div>
    );
  }
}
