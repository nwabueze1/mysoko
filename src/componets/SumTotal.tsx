import React from "react";

export default function SumTotal() {
  return (
    <main>
      <section className="d-flex w-100  py-0 my-0">
        <p className="w-100  py-0 my-0">
          Subtotal{" "}
          <span className="float-right text-muted">
            <strong>UGX 12,700</strong>
          </span>
        </p>
      </section>
      <section className="d-flex w-100 py-0 my-0 ">
        <p className="w-100  py-0 my-0 text-muted">
          Delivery
          <span className="float-right text-success">
            <strong>Free</strong>
          </span>
        </p>
      </section>
    </main>
  );
}
