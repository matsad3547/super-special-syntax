'use strict';

import React from 'react';

const getObjFromDate =  (arrOfPosts, month) => {
  let arr = [];
  arrOfPosts.map( function(obj, ind){
    if (obj.date.includes(month)){
      obj.id = ind;
      arr.push(obj);
    }
  })
  return arr;
}

export default class ByMonth extends React.Component {

  render () {

    const displayDate = this.props.displayDate;

    const getDisplayFromArr = this.props.getDisplayFromArr;

    var month = this.props.month;

    let dataByMonth = getObjFromDate(this.props.data, month);

    let displayData = getDisplayFromArr(dataByMonth);

    return(
      <div className='main div'>
        <h3 className='label'>Posts from {month} ...</h3>
      {displayData.map( (arr, ind) =>
        <div className='main-post' key={'parent' + ind} >
          <div className='main-header' key={ind + 'MD'}>
            <h2 className='clickable' key={ind + 'A'} onClick={this.props.handleClickDispBlog} id={arr[3]}>{arr[0]}</h2>
            <h4 className='date' key={ind + 'B'}>{displayDate(arr[1])}</h4>
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
