import logo from './logo.svg';
import './App.css';
import ReactState from './ReactState';
import FuncReactState from './FuncReactState'

function App() {
  return (
    <div>
      <h1>React State Tset</h1>
      {/* <ReactState reactString={"react"}/> */}
      <FuncReactState reactString={"react"}/>
    </div>
  );
}

export default App;
