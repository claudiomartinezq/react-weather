import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import Error from './Error';
import Weither from './Weather';
import axios from 'axios';

const App = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (city === '') return;
      const getResult = async () => {
      const apiId = '64f7be31ded60c3681d6623800b90290';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
      let result = null;
      try {
        result = await axios.get(url);
        setResult(result.data);
      } catch (err) {
        result = err.response;
        setResult(result);
      }
    }
    getResult();
  }, [city, country]);
  
  const getSearch = search => {
    if (search.city === '' || search.country === '') {
      setError(true);
      return;
    }
    setCity(search.city);
    setCountry(search.country);
    setError(false);
  }
  
  let component;
  if (error) {
    component = <Error message="Please enter a city and select a country" />
  } else if (result.status === 404) {
    component = <Error message="City not found" />
  } else {
    component = <Weither result={result} />;
  }

  return (
    <Fragment>
      <Header title="React Weather" />
      <div className="m-5">
        <div className="row">
          <div className="col-md-6">
            <Form getSearch={getSearch} />  
          </div>
          <div className="col-md-6">
            {component}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
