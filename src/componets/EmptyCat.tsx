import React from "react";
import { Badge } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";

export default function EmptyCat() {
  return (
    <>
      <h6 className="text-left">
        Bag{" "}
        <Badge className="ml-1 fs-2" variant="primary">
          0
        </Badge>
      </h6>
      <EmojiFrown
        size={90}
        className="text-muted mb-2 ml-0 text-left"
      ></EmojiFrown>
      <h6 className="mb-0 pb-0">it's empty here start </h6>
      <p className="py-0 my-0 text-muted">
        start shopping to add items to your bag
      </p>
    </>
  );
}
