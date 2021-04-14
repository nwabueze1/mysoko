import React from "react";
import { Card, Col, Row } from "react-bootstrap";

interface OrderCardProps {
  HeaderIcon: JSX.Element;
  OrderId: number;
  Quantity: number;
  PriceTotal: number;
  Date: string;
  ShippingStatus: JSX.Element;
}
export default function OrderCard({
  Date,
  HeaderIcon,
  OrderId,
  PriceTotal,
  Quantity,
  ShippingStatus,
}: OrderCardProps) {
  return (
    <Card
      style={{ maxWidth: "22rem", minWidth: "19rem" }}
      className="mb-3 mx-3"
    >
      <Card.Body>
        {HeaderIcon}

        <Row>
          <Col lg={6} md={6} sm={6} xs={6} className="text-start text-muted">
            <p className="m-0 p-0">Order #{OrderId}</p>
            <p className="m-0 p-0">{Quantity} items</p>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <p className="text-end m-0 p-0">N{PriceTotal}</p>
            <p className="text-muted m-0 p-0">{Date}</p>
          </Col>
        </Row>
        <div className="d-flex align-items-center ">{ShippingStatus}</div>
      </Card.Body>
    </Card>
  );
}
