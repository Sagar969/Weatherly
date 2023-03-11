import React, { useEffect, useContext } from 'react'

import Logo from './Logo'
import SearchBar from './SearchBar'
import SidebarWeather from './SidebarWeather'
import styled, { keyframes } from 'styled-components';
import { slideInLeft, flash, flip } from 'react-animations';
import { AppContext } from '../contexts/DataProvider';

const AnimationDiv = styled.div`animation: 2s ${keyframes`${slideInLeft}`} 1`;
let AnimationDivSecond = styled.div``;


const Sidebar = () => {

  const con = useContext(AppContext);
  
  useEffect(() => {
    AnimationDivSecond = styled.div``;
    AnimationDivSecond = styled.div`animation: 2s ${keyframes`${flip}`} 1`;
  }, [con.wData])

  return (
    <div className='sidebar'>
      <AnimationDiv>
      <Logo />
      <SearchBar />
    </AnimationDiv>
    <AnimationDivSecond>
      <SidebarWeather />
    </AnimationDivSecond>
    </div>
  )
}

export default Sidebar