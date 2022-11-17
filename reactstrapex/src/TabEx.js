import { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

class TabEx extends Component{
    constructor(props){
        super(props);
        this.state = {tabState:'React'}
    }

    toggle=(tabnum) => {
        if(this.state.tabState !== tabnum){
            this.setState({tabState:tabnum});
        }
    }
    render(){
        return(
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={()=>{this.toggle("React");}}>
                            first tab
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink onClick={()=>{this.toggle("start");}}>
                            second tab
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.tabState}>
                    <TabPane tabId="React"><h3>React</h3></TabPane>
                    <TabPane tabId="start"><h3>start</h3></TabPane>
                </TabContent>
            </>
        )
    }
}

export default TabEx;