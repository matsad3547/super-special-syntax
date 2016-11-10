'use strict';

import React from 'react';
import $ from 'jquery';

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
  let tag = clicked_id.target.id
  this.props.mainPageChange(mainDisp, tag);
  };


  render () {

    $("nav select").change(function() {
      window.location = $(this).find("option:selected").val();
    });

    let dataObj = this.props.data;

    let keywords = getObjArrProps(dataObj, 'tags')

    let months = getObjMonths(dataObj);

    return(
    <div className="mobile-select-bar div">
      <div>
        <label>Past Entries<input placeholder= 'Pick a Month' list='months'></input>  </label>
          <datalist id='months' className='datalist'>
          {months.map( (month) =>
            <option key={month} onClick={this.handleClickMonth.bind(this)} id={month} value={month}></option>
            )}
          </datalist>
      </div>
      <div>
        <h3>Blog Topics</h3>
      </div>
    </div>
    );
  }
}
