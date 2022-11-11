import { Component } from "react";

class ReactState extends Component{
    constructor(props){
        super(props);
        this.state = {StateString:this.props.reactString,StateNumber:200};
    }

    stateChange = () => {
        this.setState({...this.state,StateNumber:300});
        this.setState({...this.state,reactString:"리액트"});
    }
    render(){
        return(
            <div>
            {/* <div>{this.state.StateString}{this.state.StateNumber}</div>
            {/* <button onClick={(e)=>{this.setState({...this.state,StateNumber:300})}}>300</button> */}
            {/* <button onClick={(e)=>this.stateChange()}>300</button>  */}
            </div>
        )
    }
}

export default ReactState