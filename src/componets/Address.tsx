import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";
import {
  CircleFill,
  CircleSquare,
  FileCheck,
  Record2,
  Shop,
} from "react-bootstrap-icons";
import ListItem from "./ListItem";
import OrderCard from "./OrderCard";

interface AddressProps {
  id: number;
  name: string;
  phone: string;
  city: string;
  address: string;
}
interface adresProp {
  isShown?: boolean;
}
export default function Address() {
  const [show, setShow] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [selectedItem, setSelectedItem] = React.useState<string>("address");

  const handleSubmit = async () => {
    setLoading(true);

    return setLoading(false);
  };
  const handleEdit = (id: number) => {};
  const handleDelete = (id: number) => {};
  const reset = () => {
    setName("");
    setPhone("");
    setAddress("");
    setCity("");
    setId(0);
  };

  return (
    <Container>
      <div id="address" className="border m-1 mb-4">
        <div className="pt-5 border border-left-0 border-top-0 border-bottom-0 pl-3">
          <p
            className={selectedItem === "order" ? "active mt-1" : " mt-1"}
            style={{
              cursor: "pointer",
            }}
            onClick={() => setSelectedItem("order")}
          >
            <FileCheck size={20} className="auto"></FileCheck> My Orders
          </p>
          <p
            style={{
              cursor: "pointer",
            }}
            className={selectedItem === "address" ? "active mt-1" : "mt-1"}
            onClick={() => setSelectedItem("address")}
          >
            <Record2 className="auto" size={20}></Record2> My Addressess
          </p>
        </div>
        {selectedItem === "address" ? (
          <div
            className="border border-top-0 border-bottom-0 border-left-0 pt-5 pb-2"
            style={{ minHeight: "80vh" }}
            id="second"
          >
            <Card
              style={{ width: "15rem", height: 150 }}
              className="pt-2 pl-2  "
            >
              <strong>Shrey Karah</strong>
              <p className="text-capitalize text-muted mb-0 pb-0">
                Quench village, plot 12 nkruma rd, kampala uganda
              </p>
              <p className="my-0 py-0">09032295542</p>
              <p className="mt-3">
                <span className="pr-3" style={{ cursor: "pointer" }}>
                  Edit
                </span>
                <span className="text-danger" style={{ cursor: "pointer" }}>
                  Delete
                </span>
              </p>
            </Card>
            <Card
              style={{ width: "15rem", height: 150 }}
              className=" d-flex justify-content-center align-items-center"
            >
              <p
                className="text-primary text-capitalize"
                style={{ cursor: "pointer" }}
                onClick={() => setShow(true)}
              >
                + add new address{" "}
              </p>
            </Card>
          </div>
        ) : (
          <div className="pt-5 pb-2" style={{ minHeight: "80vh" }}>
            <div className="d-flex w-100 text-left mb-5">
              <strong className="float-right">Showing all orders</strong>
              <FileCheck size={20}></FileCheck>
            </div>
            <div id="order">
              <OrderCard
                Date="12/04/2021"
                HeaderIcon={
                  <ListItem
                    Icon={
                      <CircleSquare size={20} color="dodgerblue"></CircleSquare>
                    }
                    IconSize={20}
                    title="Target"
                  ></ListItem>
                }
                OrderId={123456}
                PriceTotal={10000}
                Quantity={4}
                ShippingStatus={
                  <section className="text-warning">
                    <CircleFill className="pr-1"></CircleFill>Shipped
                  </section>
                }
              ></OrderCard>
              <OrderCard
                Date="12/04/2021"
                HeaderIcon={
                  <ListItem
                    Icon={<Shop size={20} className="text-muted"></Shop>}
                    IconSize={20}
                    title="Ahbis Jukes Store"
                  ></ListItem>
                }
                OrderId={123456}
                PriceTotal={2000}
                Quantity={1}
                ShippingStatus={
                  <section className="text-primary">
                    <CircleFill className="pr-1"></CircleFill>Delivered
                  </section>
                }
              ></OrderCard>
            </div>
          </div>
        )}
      </div>
      <Modal
        aria-labelledby="conatined-modal-title-vcenter"
        centered
        show={show}
        onHide={() => {
          setShow(false);
          reset();
        }}
      >
        <Modal.Header closeButton className="py-0 my-0">
          <Modal.Title className="text-capitalize text-primary py-0 my-0">
            New Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Form.Group>
              <Form.Label htmlFor="name" className="text-muted fs-6 my-0">
                name
              </Form.Label>
              <Form.Control
                placeholder="eg: john Doe"
                id="name"
                type="text"
                required
                minLength={5}
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Label htmlFor="tel" className="my-0 py-0 text-muted">
                  Phone
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>+234</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    id="tel"
                    type="tel"
                    minLength={9}
                    placeholder="eg: 09032295542"
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                  ></Form.Control>
                </InputGroup>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label className="text-muted" htmlFor="city">
                City
              </Form.Label>
              <Form.Control
                placeholder="eg: lagos"
                id="city"
                required
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="eg: No 20 benjamin street onitsha"
                value={address}
                onChange={(e) => setAddress(e.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-5">
              {id === 0 ? (
                <Button type="submit" variant="secondary">
                  {!loading ? (
                    <>Add</>
                  ) : (
                    <Spinner animation="border" color="light"></Spinner>
                  )}
                </Button>
              ) : (
                <Button type="submit" variant="primary">
                  Edit
                </Button>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
