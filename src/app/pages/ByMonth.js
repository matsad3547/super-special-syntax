'use strict';

import React from 'react';

const getObjFromDate =  (arrOfPosts, month) => {
  let arr = [];
  arrOfPosts.map( function(obj){
    if (obj.date.includes(month)){
      arr.push(obj);
    }
  })
  return arr;
}

const getDisplayFromArr = arrOfPosts => {
  let outerArr = [];
  arrOfPosts.map( (obj) => {
    let innerArr = [];
    innerArr.push(obj.title);
    innerArr.push(obj.date.join(' '));
    innerArr.push(((obj.content)[0].split('. '))[0] + '...');
    outerArr.push(innerArr);
  } )
  return outerArr;
}

export default class ByMonth extends React.Component {

  render () {

    var month = this.props.month;

    let dataByMonth = getObjFromDate(this.props.data, month);

    let displayData = getDisplayFromArr(dataByMonth);

    return(
      <div className='main div'>
        <h3 className='label'>Posts from {month} ...</h3>
      {displayData.map( (arr, ind) =>
        <div className='main-post' key={'parent' + ind} >
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
