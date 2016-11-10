'use strict';

import React from 'react';

//returns an array of objects corresponding to a particular month
const getObjFromTag =  (arrOfPosts, tag) => {
  let arr = [];
  arrOfPosts.map( function(obj){
    if (obj.tags.includes(tag)){
      arr.push(obj);
    }
  })
  return arr;
}

// var tag = 'cheese';

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

    let tag = this.props.tag;

    let dataByMonth = getObjFromTag(this.props.data, tag);

    let displayData = getDisplayFromArr(dataByMonth);

    return(
      <div className='main div'>
        <h3 className='label'>Posts that talked about {tag}...</h3>
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
