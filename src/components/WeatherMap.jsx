import React, { useState, useEffect, useContext } from 'react'
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { AppContext } from '../contexts/DataProvider';

const WeatherMap = () => {
  const con = useContext(AppContext);
  const [centerCoords, setCenterCoords] = useState([28.4089, 77.3178]);
  
  useEffect(() => {
    if(con.mapLat !== 0 && con.mapLng !== 0) {
      setCenterCoords([con.mapLat, con.mapLng]);
    }
  }, [con.mapLat, con.mapLng])
  const setLoc = (newLat, newLng) => {
    con.getMapPos(newLat, newLng);
    setCenterCoords([newLat, newLng]);
  }

    
  return (
    <div className="weather-map">
        <MapContainer center={centerCoords} zoom={13}className='map-container' style={{height: '100%'}}>
          <Map setLoc={setLoc} centerCoords={centerCoords}/>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={centerCoords}>
          </Marker>
        </MapContainer>
    </div>
  )
}

export default WeatherMap

const Map = ({ setLoc, centerCoords }) => {
  const map = useMap();
  map.setView(centerCoords);
  const mapEvents = useMapEvents({
    click(e) {
      console.log(e.latlng)
      setLoc(e.latlng.lat, e.latlng.lng);
      mapEvents.setView(e.latlng, mapEvents.getZoom());
    },
  })
}