import { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalEx extends Component {
    constructor(props){
        super(props);
        this.state = {modal:false}
    }
    
    toggle= (e) => {
        this.setState({modal:!this.state.modal})
    }
render(){
    return(
        <>
            <Button color="warning" onClick={this.toggle}>Modal버튼</Button>
            <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}> Modal Header </ModalHeader>
                <ModalBody>
                    the generated Lorem Ipsum is therefore always free from repetition.
                </ModalBody>
            </Modal>
        </>
    )
}
}

export default ModalEx;