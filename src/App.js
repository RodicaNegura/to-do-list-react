import './App.css';
import React from 'react';
import axios from "axios";

function App() {
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  // });
  axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  });
  return  ( 
    <div className='App'>
      <button> Generate Cat Fact</button>
      <p></p>
    </div>
  )
}


export default App;
