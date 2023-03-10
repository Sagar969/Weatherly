import React from 'react'

import Logo from './Logo'
import SearchBar from './SearchBar'
import SidebarWeather from './SidebarWeather'
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const AnimationDiv = styled.div`animation: 2s ${keyframes`${slideInLeft}`} 1`;


const Sidebar = () => {
  
  return (
    <AnimationDiv>
    <div className='sidebar'>
      <Logo />
      <SearchBar />
      <SidebarWeather />
    </div>
    </AnimationDiv>
  )
}

export default Sidebar