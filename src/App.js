import './App.css';
// import {Car} from '../src/Car';
import { useState } from 'react';

function App() {
 const [count, setCount] = useState(0);

 const increase = () => {
  setCount(count + 1);
 }
 
 const setToZero = () => {
  setCount(0);
 }
 
 const decrease = () => {
  setCount(count - 1);
 }
 

  return (
    <div className="App">
      {/* <button onClick={() => setCount(count + 1)}> Increase </button>
      <button onClick={() => setCount(count - 1)}> Decrease </button>
      <button  onClick={() => setCount(0)}> Set To Zero </button> */}
      
      <button onClick={increase}>Increase</button>
      <button onClick={setToZero}>Set To Zero</button>
      <button onClick={decrease}>Decrease</button>
      {count}
    </div>
  );
}


export default App;
