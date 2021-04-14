import React from "react";
import { Card } from "react-bootstrap";

interface prop {
  url: string;
  title?: string;
}
export default function ImageCard({ url }: prop) {
  return (
    <>
      <Card
        style={{
          width: 150,
          borderRadius: 12,
          overflow: "hidden",
        }}
        className="m-1 "
      >
        <Card.Img src={url} width={150} height={120}></Card.Img>
        <Card.Text className="text-center">Buy now</Card.Text>
      </Card>
    </>
  );
}
