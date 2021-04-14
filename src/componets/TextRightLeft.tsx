import React from "react";

interface TextRiLeProps {
  right?: string | JSX.Element;
  left?: string | JSX.Element;
  muted?: boolean;
}
export default function TextRightLeft({ left, right, muted }: TextRiLeProps) {
  return (
    <section className="d-flex w-100  py-0 my-0">
      <p
        className={muted ? "w-100  py-0 my-0 text-muted}" : "w-100  py-0 my-0"}
      >
        {left}
        <span className={muted ? "float-right text-muted" : "float-right"}>
          <strong>{right}</strong>
        </span>
      </p>
    </section>
  );
}
