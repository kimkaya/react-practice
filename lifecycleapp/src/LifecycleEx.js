import React, {Component} from "react";

class LifecycleEx extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log("getDerivedStateFromProps:"+props.name);
    //     return{name:props.name,age:props.age};
    // }

    constructor(props){
        super(props);
        this.state = {name:props.name,age:props.age}
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.setState({...this.state,name:"kang"});
    }

    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate");
        return true;
    }

    render(){
        console.log("render");
        return<h1>LifecycleEx Test :{this.state.name},{this.state.age}</h1>
    }
}

export default LifecycleEx;