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
  console.log(month);
  this.props.mainPageChange(mainDisp, null, month);
};

  handleClickTag(clicked_id){
  var mainDisp = 2;
  let tag = clicked_id.target.id
  // $('.tagMenu').slideToggle(1000, function(){
  //   console.log('cheese');
  //   // $(this).toggleClass('.tagMenuExpanded').css('display', '');
  // });
  this.props.mainPageChange(mainDisp, tag);
  };

  inputClickMonth(e) {
    var value = this.attribute.val();
    var option = this.attributeList.find("[value='" + value + "']");
    if (option.length > 0) {
      var id = option.data("id");
      console.log(id);
    }
  }


  render () {

    $(document).ready(function() {
      $('.monthSel').click(function(){
        $('.monthMenu').slideToggle(400, function(){
          $(this).toggleClass('.monthMenu').css('display', '');
        });
      });
    });

    $(document).ready(function() {
      $('.tagSel').click(function(){
        $('.tagMenu').slideToggle(1000, function(){
          // $(this).toggleClass('.tagMenuExpanded').css('display', '');
        });
      });
    });

    let dataObj = this.props.data;

    let keywords = getObjArrProps(dataObj, 'tags')

    let months = getObjMonths(dataObj);

    return(
    <div className="mobile-select-bar div">
      <div>
        <h3><a className='monthSel'>Past Entries</a></h3>
        <div className='monthMenu'>
        {months.map( (month) =>
          <li  key={month} onClick={this.handleClickMonth.bind(this)} id={month}>
            {month}
          </li>)}
        </div>
      </div>
      <div>
        <h3><a className='tagSel'>Blog Topics</a></h3>
        <div className='tagMenu'>
        {keywords.map( (keyword) =>
          <li  key={keyword} onClick={this.handleClickMonth.bind(this)} id={keyword}>
            {keyword}
          </li>)}
        </div>
      </div>
    </div>
    );
  }
}

// <div>
//   <label>Past Entries <input placeholder= 'Pick a Month' list='months' input={this.inputClickMonth.bind(this)}></input>  </label>
//     <datalist id='months' className='datalist'>
//     {months.map( (month) =>
//       <option key={month}  data-id={month} value={month}></option>
//       )}
//     </datalist>
//     <input type='submit' value='Submit' onClick={this.inputClickMonth.bind(this)}></input>
// </div>
