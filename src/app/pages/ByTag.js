'use strict';

import React from 'react';
//
//TODO Make date processing work well
// const displayDate = (dateArr) => {
//   let arr = dateArr;
//   arr[1] += ',';
//   arr.join(' ')
//   return arr;
// }

const getObjFromTag =  (arrOfPosts, tag) => {
  let arr = [];
  arrOfPosts.map( function(obj, ind){
    if (obj.tags.includes(tag)){
      obj.id = ind;
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
    innerArr.push(((obj.content)[0].split('. '))[0]);
    innerArr.push(obj.id);
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
            <h2 className='clickable' key={ind + 'A'} onClick={this.props.handleClickDispBlog} id={arr[3]}>{arr[0]}</h2>
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
