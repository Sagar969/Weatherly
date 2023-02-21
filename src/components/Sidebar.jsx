import React from 'react'

import Logo from './Logo'
import SearchBar from './SearchBar'
import SidebarWeather from './SidebarWeather'

const Sidebar = ({ changeLoc, wData, place, tempUnit, curLocWeather }) => {
  return (
    <div className='sidebar'>
      <Logo />
      <SearchBar changeLoc={changeLoc} curLocWeather={curLocWeather}/>
      <SidebarWeather wData={wData} place={place} tempUnit={tempUnit} />
    </div>
  )
}

export default Sidebar