import React from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Lock, Person } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  return (
    <div
      style={{ height: "100vh" }}
      id="login"
      className="d-flex justify-content-center align-items-center w-100 "
    >
      <Card style={{ width: "20rem" }} id="cards">
        <Card.Header>
          <Card.Title id="title">Login Page</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            <Form.Row>
              <Col>
                <Form.Label htmlFor="tel" className="my-0 py-0 text-muted">
                  Email
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <Person className="text-black" size={15}></Person>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    id="tel"
                    type="email"
                    minLength={9}
                    placeholder="example@gmail.com"
                    required
                  ></Form.Control>
                </InputGroup>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="pass" className="my-0 py-0 text-muted">
                  Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <Lock></Lock>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    id="pass"
                    type="password"
                    minLength={9}
                    placeholder="enter a valid password"
                  ></Form.Control>
                </InputGroup>
              </Col>
            </Form.Row>
            <Form.Group>
              <Button
                variant="secondary"
                className="w-100 text-center my-1 "
                type="submit"
              >
                Login
              </Button>
            </Form.Group>
            <p className="text-end py-0 my-0">
              Not a member? <a href="/">Register</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
