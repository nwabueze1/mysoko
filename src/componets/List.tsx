import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

interface ListProps {
  title: string;
  price?: string;
  oldPrice?: string;
}
export default function List({ oldPrice, price, title }: ListProps) {
  const [count, setCount] = React.useState<number>(1);
  return (
    <div>
      <p className="my-0 py-0">
        <strong className="text-muted">{title}</strong>
      </p>
      <p className="text-muted my-0 py-0" style={{ fontSize: ".8rem" }}>
        per piece
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
        <div>
          <strong>NGN {price}</strong>
          <p className="text-muted" style={{ textDecoration: " line-through" }}>
            NGN {oldPrice}
          </p>
        </div>
        <div>
          <ButtonGroup
            className="border border-primary"
            style={{ borderRadius: 2 }}
            size="sm"
          >
            <Button variant="light" onClick={() => setCount(count - 1)}>
              -
            </Button>
            <Button
              variant="light"
              className="border-left border-primary border-top-0 border-bottom-0 border-right-0"
            >
              {count}
            </Button>
            <Button
              onClick={() => setCount(count + 1)}
              variant="light"
              className="border-left border-primary border-top-0 border-bottom-0 border-right-0"
            >
              +
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
