import './App.css';
// import {Car} from '../src/Car';

function App() {
  const planets = [
    {name: "Mars", isGasPLanet: false }, 
    {name: "Earth", isGasPLanet: false}, 
    {name: "Jupiter", isGasPLanet: true}, 
    {name: "Venus", isGasPLanet: false}, 
    {name: "Neptune", isGasPLanet: true},
    {name: "Uranus", isGasPLanet: true},
  ];
  
  return (
    <div className="App">
      {planets.map((planet, key) => !planet.isGasPLanet && <h1>{planet.name}</h1>)}
      
    </div>
  );
}


export default App;
