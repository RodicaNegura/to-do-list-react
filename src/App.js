import './App.css';
// import {Car} from '../src/Car';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1)
  };
  
  const decreaseAge = () => {
    setAge(age - 1)
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
    </div>
  );
}


export default App;
