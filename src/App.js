import './App.css';
import React from "react";
import { useToggle } from "../src/pages/useToggle"
// import Form from './pages/form';
import Cat from './pages/cat';

const  App = () => {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  

  return  (  
    <div className='App'>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1> Hidden Text</h1>}
      {/* <Form /> */}
      <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
      {isVisible2 && <h1> Hidden Text</h1>}
      {/* <Form /> */}
    </div>
  );
}

export default App;
