import React from "react";
import { Button, ButtonGroup, Col, Image, Row } from "react-bootstrap";
import products from "./Interface/Product";

interface Props {
  list: products;
}
export default function Description({ list }: Props) {
  const [count, setCount] = React.useState<number>(10);

  return (
    <Row className="py-5">
      <Col
        lg={6}
        md={6}
        sm={12}
        xs={12}
        className=" justify-content-center align-items-center d-flex"
      >
        <Image
          src={list?.url}
          height={400}
          width={400}
          style={{ borderRadius: 15 }}
        ></Image>
      </Col>
      <Col className=" p-5">
        <div className="text-center">
          <strong className="mt-5 w-100">{list?.product_name}</strong>
          <p className="text-muted ">{list?.description}</p>
        </div>
        <div className="my-1">
          <strong className="text-start ">N{list?.price}</strong>
          <p
            style={{ textDecoration: "line-through" }}
            className="text-black-50"
          >
            N500
          </p>
        </div>
        <br />
        <ButtonGroup size="sm" className="mb-5">
          <Button
            variant="light"
            className={"border border-primary"}
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            -
          </Button>
          <Button variant="light" className="border border-primary">
            {count}
          </Button>
          <Button
            variant="light"
            className="border border-primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
        </ButtonGroup>
        <br />
        <div className="py-3">
          <Button variant="light" className="border border-primary  px-5 my-1">
            Add to Bag
          </Button>
          <Button variant="warning" className="text-primary ml-2 px-5">
            Buy now
          </Button>
        </div>
      </Col>
    </Row>
  );
}
