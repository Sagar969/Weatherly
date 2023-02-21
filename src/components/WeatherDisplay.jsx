import React from 'react'

import Options from './Options'
import FutureWeather from './FutureWeather'
import TodaysHighlights from './TodaysHighlights'

const WeatherDisplay = ({wData, changeTempUnit, tempUnit}) => {
  return (
    <div className='weather-display'>
      <Options changeTempUnit={changeTempUnit}/>
      <FutureWeather wData={wData} tempUnit={tempUnit} />
      <TodaysHighlights wData={wData} />
      <div className="credits">Created by <a href="https://github.com/Sagar969" target="_blank">Sagar Mavai</a></div>
    </div>
  )
}

export default WeatherDisplay