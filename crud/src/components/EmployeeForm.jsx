import React, { Component } from 'react'
import { Form, Col, Row, Card } from 'react-bootstrap'

export default class EmployeeForm extends Component {

    // constructor(props) {
    //     super(props);
    // }

    /** Generic handle change events for all fields */
    handleChange = e => {
        this.props.values[e.target.id] = e.target.value;
    }

    // handleChange = key => e => {
    //     this.props.values[key] = e.target.value;
    // }

    // handleChange = (key, e) => {
    //     this.props.values[key] = e.target.value;
    // }

    render() {

        const { values } = this.props.values;
        return (
            <div>

                <Form.Group controlId="firstName">
                    <Row>
                        <Col lg={3}>
                            <Form.Label>First name</Form.Label>
                        </Col>
                        <Col lg={9}>
                            <Form.Control type="text" placeholder="Enter first name" value={values.firstName} onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="lastname">
                    <Row>
                        <Col lg={3}>
                            <Form.Label>Last name</Form.Label>
                        </Col>
                        <Col lg={9}>
                            <Form.Control type="text" value={values.lastName} placeholder="Enter last name" onChange={this.handleChange} />
                        </Col>
                    </Row>
                </Form.Group>



            </div>
        )
    }
}
