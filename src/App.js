import './App.css';
import React from "react";
import { useToggle } from "../src/pages/useToggle"
// import Form from './pages/form';

const  App = () => {
  const [isVisible, toggle] = useToggle()
  

  return  (  
    <div className='App'>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1> Hidden Text</h1>}
      {/* <Form /> */}
    </div>
  );
}

export default App;
