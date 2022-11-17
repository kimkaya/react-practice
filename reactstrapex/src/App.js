import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CollsapeEx from './CollapseEx';
import Fade from "./FadeEx";
import FormEX from "./FormEX"
import  InputGroupEx  from "./InputGroupEx";
import  ListGroupEx  from "./ListGroupEx";
import ModalEx from "./ModalEx";
import NavbarEx from "./NavbarEx";
import PagenationEx from "./PagenationEx";
import PopoverEx from "./PopoverEx";
import ProgressEx from "./ProgressEx";
import SpinnerEx from "./SpinnerEx";
import TableEx from "./TableEx";
import TabEx from "./TabEx";
import SweetAlert2BasicEx from "./SweetAlert2BasicEx";
import SweetAlert2PostionEx from "./SweetAlert2PostionEx";
import SweetAlert2ConfirmEx from "./SweetAlert2ConfirmEx";

function App() {
  return (
  <>
    <h1>
      ReactStrap
    </h1>
    <CollsapeEx/>
    <Fade/> 
    <FormEX/> 
    <InputGroupEx/>
    <ListGroupEx/>
    <ModalEx/>
    <NavbarEx/>
    <PagenationEx/>
    <PopoverEx/>
    <ProgressEx/>
    <br/>
    <SpinnerEx/>
    <br/>
    <TableEx/>
    <TabEx/>
    <SweetAlert2BasicEx/>
    <SweetAlert2PostionEx/>
    <SweetAlert2ConfirmEx/>
    </>
  );
}

export default App;
