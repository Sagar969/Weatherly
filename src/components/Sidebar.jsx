import React from 'react'

import Logo from './Logo'
import SearchBar from './SearchBar'
import SidebarWeather from './SidebarWeather'

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
      <Logo />
      <SearchBar />
      <SidebarWeather />
    </div>
  )
}

export default Sidebar