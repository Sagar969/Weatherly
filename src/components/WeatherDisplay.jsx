import React from 'react'

import WeatherMap from './WeatherMap'
import Options from './Options'
import FutureWeather from './FutureWeather'
import TodaysHighlights from './TodaysHighlights'

const WeatherDisplay = () => {


  return (
    <div className='weather-display'>
      <WeatherMap />
      <Options />
      <FutureWeather />
      <TodaysHighlights />
      <div className="credits">Created by <a href="https://github.com/Sagar969" target="_blank">Sagar Mavai</a></div>
    </div>
  )
}

export default WeatherDisplay