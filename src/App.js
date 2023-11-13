import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Elena" age={33} email="elena@yahoo.com"/>
      <br></br>
      <User name="Rodica" age={32} email="rodicas@yahoo.com"/>
      <br></br>
      <User name="Mona" age={45} email="mona@yahoo.com"/>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1><i>{props.name}</i></h1>
      <h2>{props.age}</h2>
      <h3><em>{props.email}</em></h3>
    </div> 
  );
};


export default App;
