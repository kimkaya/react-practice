import "./App.css";
import ReactstrapAlert from "./ReactstrapAlert";
import ReactstrapBadge from "./ReactstrapBadge";
import ReactstrapDrop from "./ReactstrapDrop";
import ReactstrapBtngrp from "./ReactstrapBtngrp";
import ReactstrapCard from "./ReactstrapCard";
import ReactstrapCarousel from "./ReactstrapCarousel";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div >
      <h1>React strap Test</h1>

      <ReactstrapAlert/>
      <ReactstrapBadge/>
      <ReactstrapDrop/>
      <ReactstrapBtngrp/>
      <ReactstrapCard/>
      <ReactstrapCarousel/>
      
    </div>
  );
}

export default App;
