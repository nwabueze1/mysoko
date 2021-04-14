import React from "react";
interface props {
  left: JSX.Element;
  right: JSX.Element;
}
export default function TwoColumnList({ left, right }: props) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
