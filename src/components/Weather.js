import React, { Fragment } from 'react'

const Weither = ({result}) => {

  const {name, main} = result;
  if (!name) return null;
  const kelvin = 273.15;

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            The Weather in {name}
          </div>
          <p className="text-center display-4">{parseInt(main.temp - kelvin, 10)}&#x2103;</p>
          <p>Temp Máx: {parseInt(main.temp_max - kelvin, 10)}&#x2103;</p>
          <p>Temp Min: {parseInt(main.temp_min - kelvin, 10)}&#x2103;</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Weither;
