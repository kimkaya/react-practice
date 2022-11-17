import { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavbarEx extends Component {
    constructor(props){
    super(props);
    this.state = { collapseed:false}
}
toggle = (e) => {
    this.setState({collapseed:!this.state.collapseed})
}
render(){
    return(
        <>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2"/>
                <Collapse isOpen={this.state.collapseed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">react</NavLink>
                            <NavLink href="http://naver.com">start</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}
}

export default NavbarEx;