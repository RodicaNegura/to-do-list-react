import './App.css';
import {Car} from '../src/Car';

function App() {
  const cars = [
    {name: "Volkswagen", cp: 190 }, 
    {name: "Volvo", cp: 178}, 
    {name: "Audi", cp: 189}, 
    {name: "Skoda", cp: 160}, 
    {name: "BMW", cp:190},
  ];
  
  return (
    <div className="App">
      {cars.map((car, key) => {
        return (
          < Car name={car.name} cp={car.cp}/>
        )
      })}
    </div>
  );
}


export default App;
