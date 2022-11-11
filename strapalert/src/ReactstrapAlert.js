
import { Component } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class ReactstrapAlert extends Component {
    render(){
        return(
            <>
                <Alert color="danger">
                    Simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert[color : warning]
                </UncontrolledAlert>
            </>
        )
    }
}

export default ReactstrapAlert