import { Component } from "react";
import { UncontrolledCollapse, Button, Card, CardBody, Fade } from "reactstrap";

class CollsapeEx extends Component{
    render(){
        return(
            <div>
                <Button color="warning" id="toggle">
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler="toggle">
                    <Card>
                        <CardBody>
                            reactstrap
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                
            </div>
        )
    }
}

export default CollsapeEx;