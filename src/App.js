import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components"; 

const Background = styled.div`
  background: black;
`;

const Title = styled.div`
  color: red;
`; 

const Date = styled.div`
  color: red;
`; 

const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-items: center;
`; 

function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
      .then(response => {
          setData(response.data)
      })
      .catch(error => {console.log('error in Data')})
  }

    useEffect(fetchData, [])

    console.log(data);
    
  return (
    <div className="App">
      <Background>
      <Title>
        <h1>NASA</h1>
      </Title>
      <Date>
        <h2>{data.date}</h2>
      </Date>
      </Background>
        <img src={data.url} alt="ISS in Front of Sun"></img>
        <Content>
          <div className="content">
            <h3>{data.title}</h3>
              <p>{data.explanation}</p>
          </div>
        </Content>
    </div>
  );
}

export default App;
