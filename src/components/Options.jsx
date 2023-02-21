import React, { useEffect } from 'react'

const Options = ({ changeTempUnit }) => {

  useEffect(() => {
    document.querySelector('#degC').setAttribute('checked', '');
  }, [])

  return <>
  <div className="options">
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='degC'>
        <input type="radio" name="deg" id="degC" />
        <div onClick={(e) => changeTempUnit(e.target.textContent)}>C</div>
      </label>
      <label htmlFor='degF'>
        <input type="radio" name="deg" id="degF" />
        <div onClick={(e) => changeTempUnit(e.target.textContent)}>F</div>
      </label>
    </form>
  </div>
  </>
}

export default Options