import React, { useContext } from 'react'

import Sidebar from './components/Sidebar'
import WeatherDisplay from './components/WeatherDisplay'
import ErrorDisplay from './components/ErrorDisplay'
import Loading from './components/Loading'
import ThemeIcon from './components/ThemeIcon'
import DayHighlights from './components/DayHighlights'
import { AppContext } from './contexts/DataProvider'

const App = () => {
  const con = useContext(AppContext);
  
  return <div className="container">
      <Sidebar />
      {con.wData.latitude && con.errNum === 0 ? <WeatherDisplay /> : <ErrorDisplay />}

      <ThemeIcon />

      {con.isHighlights ? <DayHighlights /> : <></>}

      {con.isFetching === true ? <Loading /> : <></>}
    </div>  
}

export default App