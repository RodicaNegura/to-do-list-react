import './App.css';
import React from "react";
// import { useToggle } from "../src/pages/useToggle"
// import Form from './pages/form';
// import Cat from './pages/cat';
import useCount from './pages/useCount';

const  App = () => {
  const { count, increase, decrease, restart } = useCount();
  return  ( 
   
    <div className='App'>
      {count}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
    </div>
  );
}

export default App;
