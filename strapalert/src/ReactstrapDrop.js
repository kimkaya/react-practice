import { Component } from "react";
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";

class ReactstrapDrop extends Component {
    constructor(props){
        super(props)
        this.state = {dropdownOpen : false}
    }

    toggle = (e) => {
        this.setState({dropdownOpen:!this.state.dropdownOpen});
    }

    render(){
        return(
            <>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Dropdown</DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem header>헤더</DropdownItem>
                        <DropdownItem disabled>비활성</DropdownItem>
                        <a href="http://naver.com">
                            <DropdownItem>네이버 사이트로 이동</DropdownItem>
                        </a>
                        <DropdownItem onClick={e=>alert("Alert 버튼")}>Alert 버튼</DropdownItem>
                    </DropdownMenu>

                </ButtonDropdown>
            </>
        )
    }
}

export default ReactstrapDrop;