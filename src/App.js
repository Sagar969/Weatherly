import React, { useState, useEffect } from 'react'

import Sidebar from './components/Sidebar'
import WeatherDisplay from './components/WeatherDisplay'
import ErrorDisplay from './components/ErrorDisplay'

const App = () => {
  const [loc, setLoc] = useState('');
  const [place, setPlace] = useState('')
  const [wData, setWData] = useState({});
  const [locGranted, setLocGranted] = useState(false);
  const [tempUnit, setTempUnit] = useState('celsius');
  let curLoc;

  const changeLoc = (newLoc) => {
    setLoc(newLoc);
  }
  const changeTempUnit = (unit) => {
    setTempUnit(unit === 'C' ? 'celsius' : 'fahrenheit');
  }

  const getCoords = async (loc) => {
    const res = await fetch(`https://us1.locationiq.com/v1/search?key=pk.f8c7ac4314ec5b028ae961f89d5db397&q=${loc}&format=json`);
    const data = await res.json();
    // console.log(data[0].lat, data[0].lon)
    await getData(data[0].lat, data[0].lon);
    await getPlace(data[0].lat, data[0].lon);
  }
  
  const getPlace = async (lat, lon) => {
    // console.log(lat, lon)
    const res = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.f8c7ac4314ec5b028ae961f89d5db397&lat=${lat}&lon=${lon}&format=json`);
    const data = await res.json();
    console.log(data)
    setPlace(`${data.address.city ? data.address.city : data.address.county ? data.address.county : data.address.town ? data.address.town : data.address.village}, ${data.address.country}`);
  }
  
  const getData = async (lat, lon) => {
    const hourlyVar = 'temperature_2m,visibility,relativehumidity_2m,pressure_msl,windspeed_10m,winddirection_10m,weathercode';
    const dailyVar = 'weathercode,temperature_2m_max,temperature_2m_min';
  
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=GMT&hourly=${hourlyVar}&daily=${dailyVar}&temperature_unit=${tempUnit}`);
    const data = await res.json();
    setWData(data);
    console.log(data);
    if(curLoc) await getPlace(data.latitude, data.longitude);
    curLoc = false;
  }

  const handleError = (err) => {
    console.log('handeling error', err)
  }

  const curLocWeather = () => {
    navigator.geolocation.getCurrentPosition(successCall, errorCall);
  }
  
  useEffect(() => {
    if(!loc) curLocWeather();
  }, [tempUnit])
  useEffect(() =>  {
    if(loc) getCoords(loc).catch((err) => handleError(err));
  }, [loc, tempUnit])

  const successCall = (pos) => {
    setLocGranted(true)
    curLoc = true;
    getData(pos.coords.latitude, pos.coords.longitude);
  }
  const errorCall = (error) => {
    console.log(error);
    setLocGranted(false);
  }
  
  return <div className="container">
      <Sidebar changeLoc={changeLoc} wData={wData} place={place} tempUnit={tempUnit} curLocWeather={curLocWeather} />
      {wData.latitude ? <WeatherDisplay wData={wData} changeTempUnit={changeTempUnit} tempUnit={tempUnit}/> : <ErrorDisplay locGranted={locGranted} />}
    </div>  
}

export default App














// const getCoords = async (loc) => {
//   const res = await fetch(`https://us1.locationiq.com/v1/search?key=pk.f8c7ac4314ec5b028ae961f89d5db397&q=${loc}&format=json`);
//   const data = await res.json();
//   console.log(data);
//   console.log(data[0].lat, data[0].lon)
//   await getData(data[0].lat, data[0].lon);
// }

// const getData = async (lat, lon) => {
//   const hourlyVar = 'temperature_2m,visibility,relativehumidity_2m,pressure_msl,windspeed_10m,winddirection_10m,weathercode';
//   const dailyVar = 'weathercode,temperature_2m_max,temperature_2m_min';

//   const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=GMT&hourly=${hourlyVar}&daily=${dailyVar}`);
//   const data = await res.json();
//   console.log(data);
//   setWData(data);
//   console.log(wData);
// }