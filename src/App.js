import './App.css';
import { useState } from 'react';
import  { Text } from '../src/text';

function App() {
 const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {
          setShowText(!showText);
        }}
      >
        SHOW TEXTS
      </button>
      {showText && <Text />}
    </div>
  );
}


export default App;
