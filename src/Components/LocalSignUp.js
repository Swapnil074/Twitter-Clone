import { connect } from "react-redux";
import React, { useState } from "react";
import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";
import { registerUser } from "../Redux/Actions/userActions";
import { useNavigate } from "react-router-dom";
function LocalSignUp(props) {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(data);

    props.registerUser(data, navigate);
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="rounded-lg"
    >
      <Modal.Body className="bg-dark text-light rounded">
        <Container fluid>
          <Row className="w-100 mb-3">
            <Col className="m-0 p-0" xs={4}></Col>
            <Col className="m-0 p-0 d-flex justify-content-center" xs={4}>
              <h3>Sign Up to Twitter</h3>
            </Col>
            <Col className="m=0 p-0 d-flex justify-content-end" xs={4}>
              <Button onClick={props.onHide}>Close</Button>
            </Col>
          </Row>
          <Form className="w-65 mx-auto">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                name="name"
                id="name"
                onChange={handleChange}
                value={data.name}
                autoFocus
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                id="email"
                onChange={handleChange}
                value={data.email}
                autoFocus
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
                value={data.password}
              />
            </Form.Group>
          </Form>
          <Container className="text-center">
            <Button
              variant="primary"
              className="btn w-25 rounded-pill"
              onClick={handleSubmit}
            >
              SignUp
            </Button>
          </Container>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default connect(null, { registerUser })(LocalSignUp);
