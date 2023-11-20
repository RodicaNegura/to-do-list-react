import './App.css';
import React, { useState } from 'react';
import Axios from "axios";

function App() {
  const [generatedExcuse, setGenaratedExcuse] = useState("");

  const fetchGeneratedExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((response) => {
      setGenaratedExcuse(response.data[0].excuse);
    });
  }
  return  ( 
    <div className='App'>
      <h1> Generate A Excuse </h1>
      <button onClick={() => fetchGeneratedExcuse("family")}> Family </button>
      <br></br>
      <button onClick={() => fetchGeneratedExcuse("children")}> Children </button>
      <br></br>
      <button onClick={() => fetchGeneratedExcuse("party")}> Party </button>
      <p>{generatedExcuse}</p>
    </div>
  )
}

export default App;
