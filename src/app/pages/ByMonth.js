'use strict';

import React from 'react';

//returns an array of objects corresponding to a particular month
const getObjFromDate =  (arrOfPosts, month) => {
  let arr = [];
  arrOfPosts.map( function(obj){
    if (obj.date.includes(month)){
      arr.push(obj);
    }
  })
  return arr;
}

var month = 'October';

const getDisplayFromArr = arrOfPosts => {
  let outerArr = [];
  arrOfPosts.map( (obj) => {
    let innerArr = [];
    innerArr.push(obj.title);
    innerArr.push(obj.date.join(' '));
    innerArr.push(((obj.content)[0].split('. '))[0]);
    outerArr.push(innerArr);
  } )
  return outerArr;
}

export default class ByMonth extends React.Component {



  render () {

    let dataByMonth = getObjFromDate(this.props.data, month);

    let displayData = getDisplayFromArr(dataByMonth);

    console.log(displayData);

    return(
      <div className='main div'>
        <h3 className='label'>Posts from {month}...</h3>
      {displayData.map( (arr, ind) =>
        <div key={'parent' + ind}>
        <div className='main-header' key={ind + 'MD'}>
          <h2 key={ind + 'A'}>{arr[0]}</h2>
          <h4 className='date' key={ind + 'B'}>{arr[1]}</h4>
        </div>
        <div className='post' key={'post' + ind}>
          <p key={ind + 'C'}>
              {arr[2]}
            </p>
        </div>
        </div>
      )}
      </div>
    );
  }
}
