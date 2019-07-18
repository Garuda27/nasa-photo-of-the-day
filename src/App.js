import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from './components/nasa.js';
import axios from "axios";
function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
      .then(response => {
          setData(response.data)
      })
      .catch(error => {console.log('error in fetchData')})
  }

    useEffect(fetchData, [])

    console.log(data);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
