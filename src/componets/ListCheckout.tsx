import React from "react";
import { Badge, Image } from "react-bootstrap";
import { CircleFill } from "react-bootstrap-icons";

interface ListProps {
  imagesrc: string;
  title: string;
  subTitle?: string;
  size: string;
  value: string;
  price: string | number;
  color: string;
}
export default function ListCheckout({
  size,
  color,
  imagesrc,
  price,
  title,
  value,
  subTitle,
}: ListProps) {
  return (
    <div className="d-flex">
      <Image
        src={imagesrc}
        height={80}
        width={70}
        style={{ borderRadius: 5 }}
      ></Image>
      <section className="ml-2 d-flex flex-column w-100">
        <p className="text-muted text-capitalize my-1">{title}</p>
        {subTitle && (
          <p className="mt-0  text-capitalize text-muted my-0 py-0">
            {subTitle}
          </p>
        )}
        <p>
          size: <strong>{size}</strong>
          <span className="ml-2">
            Color : <CircleFill color={color}></CircleFill>
          </span>
        </p>
        <p className="w-100">
          <Badge color="grey" variant="primary">
            {value}
          </Badge>
          <span className="float-right text-muted">
            <strong>{price}</strong>
          </span>
        </p>
      </section>
    </div>
  );
}
