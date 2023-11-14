import './App.css';

function App() {
  return (
    <div className="App">
      <About name= "Rodica" surname="Negura" age={32} ocupation= "WebDeveloper"/>
      <br></br>
      <About name= "Bogdan" surname="Negura" age={33} ocupation= "WebDeveloper"/>
      <br></br>
      <About name= "Iasmina" surname="Negura" age={7} ocupation= "bebeWebDeveloper"/>
      <br></br>
      <About name= "Damian" surname="Negura" age={5} ocupation= "bebeWebDeveloper"/>
    </div>
  );
}

const About = ({name, surname, age, ocupation}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h1>{age}</h1>
      <h3>{ocupation}</h3>
    </div>
  )
}

export default App;
