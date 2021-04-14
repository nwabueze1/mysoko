import React from "react";
import Stepper from "bs-stepper";
import { Badge, Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import List from "../List";
import bags from "./bags";
import TwoColumnList from "../TwoColumnList";
import DottedHr from "../DottedHr";
import { toast } from "react-toastify";
import LeftChevron from "../LeftChevron";
import { useHistory } from "react-router-dom";
import RightChevron from "../RightChvron";

interface List {
  title: string;
  price: string;
  oldPrice: string;
}
export default function Steppers() {
  const [stepper, setStepper] = React.useState<Stepper>();
  const [phone, setPhone] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");
  const [bag, setLists] = React.useState<List[]>([]);
  const history = useHistory();
  React.useEffect(() => {
    document.title = "Stepper";
    const steppers = new Stepper(
      document.querySelector("#stepper1") as Element,
      {
        linear: false,
        animation: true,
      }
    );
    setStepper(steppers);
    setLists(bags);
  }, []);

  return (
    <>
      <div id="stepper" className="border-top text-muted mt-3">
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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              method="post"
            >
              {/* section 1 */}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      className="px-3 py-2"
                      variant="warning text-primary"
                      onClick={() =>
                        phone.length < 9 || typeof +phone !== "number"
                          ? toast.error("please enter a valid phone number")
                          : stepper?.next()
                      }
                    >
                      <strong>Login</strong>
                    </Button>
                  </Col>
                </Form.Row>
              </div>
              {/* section 2 */}
              <div id="test-l-2" className="content">
                <h4>Delivery Address Here</h4>
                <p>
                  select your delivery address from the existing one or add new
                  one
                </p>
                <Row>
                  <Col style={{ cursor: "pointer" }}>
                    <div
                      className="border p-2 "
                      style={{
                        borderRadius: 7,
                        minWidth: "14rem",
                        cursor: "pointer",
                      }}
                    >
                      <p>
                        <strong>Shrey Karah</strong>
                      </p>
                      <p
                        className="text-capitalize text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        qench village,off nkruma village, plot 12
                      </p>
                      <p className="text-muted pb-0 mb-0">09032295542</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center border"
                      style={{
                        minWidth: "10rem",
                        minHeight: 130,
                      }}
                    >
                      <p className="text-primary" style={{ cursor: "pointer" }}>
                        + add new address
                      </p>
                    </div>
                  </Col>
                </Row>
                <ButtonGroup className="m-2">
                  <Button
                    variant="success"
                    onClick={() => {
                      stepper?.previous();
                    }}
                    className="mr-3"
                  >
                    previous
                  </Button>
                  <Button variant="primary" onClick={() => stepper?.next()}>
                    next
                  </Button>
                </ButtonGroup>
              </div>
              <div id="test-l-3" className="content">
                <p>
                  <strong>Payment</strong>
                </p>
                <p className="mt-0 text-muted">Select yoyr paymnt method</p>
                <Form.Check
                  type="radio"
                  label="Cash on Delivery"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    console.log(value);
                  }}
                ></Form.Check>
                <ButtonGroup>
                  <Button
                    className=" mt-5 mr-4"
                    onClick={() => stepper?.previous()}
                  >
                    <strong className="text-light"> Previous</strong>
                  </Button>
                  <Button
                    type="submit"
                    className=" mt-5 mr-4"
                    variant="warning "
                  >
                    <strong className="text-primary"> Submit</strong>
                  </Button>
                </ButtonGroup>
              </div>
            </Form>
          </div>
        </div>
        <div className="border-left p-3">
          <div
            className="d-grid w-100 mb-4"
            style={{
              gridTemplateColumns: "2fr 1fr",
            }}
          >
            <strong>
              Bag <Badge variant="primary">{bag.length}</Badge>
            </strong>

            <span
              className="float-right"
              style={{ textDecoration: "underline" }}
            >
              clear
            </span>
          </div>
          {bag.map((m, i) => (
            <List
              key={i}
              title={m.title}
              oldPrice={m.oldPrice}
              price={m.price}
            ></List>
          ))}
          <hr />
          <TwoColumnList
            left={<p className="text-muted my-0">Subtotal</p>}
            right={<p className="text-muted my-0">NGN 30000</p>}
          />
          <TwoColumnList
            left={<p className="text-muted my-0">Delivery</p>}
            right={<p className="text-success my-0">Free</p>}
          ></TwoColumnList>
          <DottedHr></DottedHr>
          <TwoColumnList
            left={
              <p className="mb-0">
                <strong>Total</strong>
              </p>
            }
            right={<p className="mb-0">NGN 27000</p>}
          ></TwoColumnList>
          <em className="text-muted my-0" style={{ fontSize: ".7rem" }}>
            Inclusive of all taxes
          </em>
          <DottedHr></DottedHr>
          <p className="text-success">
            You are about to save NGN 40,000 on this order
          </p>
        </div>
      </div>
      <LeftChevron onClick={() => history.goBack()}></LeftChevron>
      <RightChevron onClick={() => history.push("/bag")} />
    </>
  );
}
