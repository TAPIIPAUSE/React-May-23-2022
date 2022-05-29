import React, { Component } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";

class Contact extends Component {
  render() {
    <div className="row row-content">
      <div className="col-12">
        <h3>Send us your Feedback</h3>
      </div>
      <div className="col-12 col-md-9">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlFor="firstname" md={2}>
              FirstName
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="FirstName"
                value={this.state.firstname}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastname" md={2}>
              LastName
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="LastName"
                value={this.state.lastname}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="telnum" md={2}>
              ContactTel.
            </Label>
            <Col md={10}>
              <Input
                type="tel"
                id="telnum"
                name="telnum"
                placeholder="Tel.number"
                value={this.state.telnum}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="email" md={2}>
              Email
            </Label>
            <Col md={10}>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="agree"
                    checked={this.state.agree}
                    onChange={this.handleInputChange}
                  />
                  {""}
                  <strong>May we contact you?</strong>
                </Label>
              </FormGroup>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Input
                type="select"
                name="contactType"
                value={this.state.contactType}
                onChange={this.handleInputChange}
              >
                <option>Tel.</option>
                <option>Email</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="message" md={2}>
              YourFeedback
            </Label>
            <Col md={10}>
              <Input
                type="textarea"
                id="message"
                name="message"
                rows="12"
                value={this.state.message}
                onChange={this.handleInputChange}
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                SendFeedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>;
  }
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    console.log("CurrentStateis:" + JSON.stringify(this.state));
    alert("CurrentStateis:" + JSON.stringify(this.state));
    event.preventDefault();
  }
}
