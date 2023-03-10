import React, { useEffect, useContext } from 'react'
import { AppContext } from '../contexts/DataProvider'

const Options = () => {
  const con = useContext(AppContext);

  const handleChangeUnit = (e) => {
    con.changeTempUnit(e.target.textContent);
  }

  useEffect(() => {
    document.querySelector('#degC').setAttribute('checked', '');
  }, [])

  return <>
  <div className="options">
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='degC'>
        <input type="radio" name="deg" id="degC" />
        <div onClick={(e) => handleChangeUnit(e)}>C</div>
      </label>
      <label htmlFor='degF'>
        <input type="radio" name="deg" id="degF" />
        <div onClick={(e) => handleChangeUnit(e)}>F</div>
      </label>
    </form>
  </div>
  </>
}

export default Options