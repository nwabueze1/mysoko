import React, { Component } from "react";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";
import { Button, Col, Form } from "react-bootstrap";

class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tel: "",
      email: "",
    };
  }

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper1") as Element, {
      linear: false,
      animation: true,
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="stepper" className="border-top text-muted m">
        <div id="stepper1" className="bs-stepper vertical my-3">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <Form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content">
                <h4 className="my-0">Account</h4>
                <p className="my-0">
                  To place your order, login by entering your 10 digit number.
                </p>
                <Form.Label htmlFor="tel" className="mb-0 mt-2">
                  Mobile Number
                </Form.Label>
                <Form.Row>
                  <Col xs={9} sm={9}>
                    <Form.Control
                      id="tel"
                      minLength={9}
                      placeholder="enter a valid phone number"
                      value={this.state.tel}
                      onChange={(e) =>
                        this.setState({ ...this.state, tel: e.target.value })
                      }
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      className="px-3 py-2"
                      variant="warning text-primary"
                      onClick={() => this.stepper.next()}
                    >
                      <strong>Login</strong>
                    </Button>
                  </Col>
                </Form.Row>
              </div>
              <div id="test-l-2" className="content">
                <h4>Delivery Address</h4>
                <p>
                  select your delivery address from the existing one or add new
                  one
                </p>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => this.stepper.next()}
                >
                  Next
                </button>
              </div>
              <div id="test-l-3" className="content text-center">
                <button type="submit" className="btn btn-primary mt-5">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="border-left">
          <h2>Some Item</h2>
        </div>
      </div>
    );
  }
}

export default App;
