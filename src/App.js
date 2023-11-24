import './App.css';
import React, { useState } from 'react';
// import Form from './pages/form';



const  App = () => {

  const [ isVisible, setIsVisible ] = useState(false);

  return  (  
    <div className='App'>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1> Hidden Text</h1>}
      {/* <Form /> */}
    </div>
  );
}

export default App;
