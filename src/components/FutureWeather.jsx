import React, { useState, useEffect } from 'react'
import DayWeather from './DayWeather'


const today = new Date();
const date = today.getDate();
const dayIndex = today.getDay();
const monthIndex = today.getMonth();

const FutureWeather = ({ wData, tempUnit }) => {
  return <>
  <div className="future-weather">
    {(() => {
      let list = [];
      for(let i=1; i <= 5; i++) {
        list.push(<DayWeather key={i} itemNum={i} day={dayIndex+i} date={date+i} month={monthIndex} wData={wData} tempUnit={tempUnit} />)
      }
      return list;
    })()}
  </div>
  </>
}

export default FutureWeather