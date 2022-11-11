import logo from './logo.svg';
import './App.css';
import PropsDatatype from './PropsDatatype'

function App() {
  return (
    <div>
      <h1>React props Test</h1>
      <PropsDatatype
      String="react"
      Number={200}
      Boolean={1==1}
      Array={[0,1,8]}
      ObjectJson={{react:"리액트", version:"5.1"}}
      function={console.log("FunctionProps:function!")}/>
    </div>
  );
}

export default App;
