import { Component } from 'react';
import { Form, FormGroup, Label, Input, Row , Col } from 'reactstrap';

class FormEX extends Component {
    render(){
        return(
            <Form>
                <label form=''>gender</label>
                <Input type="select" bsSize="sm" id='gender'>
                    <option>select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for='address'>address</Label>
                            <Input type='text' name='address' id='address'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <label for="mobile">mobile</label>
                            <Input type='text' name='mobile' id='mobile'/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <label for="age">age</label>
                            <Input type='text' name='age' id='age'/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default FormEX;