import React, { useState, useEffect } from 'react'

import gps from '../assets/icons/gps.png'
import search from '../assets/icons/search.png'


const SearchBar = ({ changeLoc, curLocWeather }) => {
  let searchInput;
  const pressEnter = (e) => {
    if(e.key === 'Enter') {
      changeLoc(searchInput.value);
      e.target.value = '';
    }
  }

  const addSearch = (e) => {
    window.addEventListener('keydown', pressEnter)
  }
  const removeSearch = (e) => {
    window.removeEventListener('keydown', pressEnter);
  }
  useEffect(() => {
    searchInput = document.querySelector('.search-bar');
  })

  return <>
  <div className='search-box'>
    <input type="search" name="search" id="search" className='search-bar' placeholder='Search for Places' onFocus={(e) => addSearch(e)} onBlur={(e) => removeSearch(e)} />
    <button><img src={search} alt="search" /></button>
    <img src={gps} alt="your location" onClick={curLocWeather}/>
  </div>
  </>
}

export default SearchBar