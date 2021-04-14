import React from "react";
import { Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LeftChevron from "../componets/LeftChevron";
import RightChevron from "../componets/RightChvron";

export default function OrderSuccess() {
  const history = useHistory();
  React.useEffect(() => {
    document.title = "order success";
  }, []);
  return (
    <>
      <LeftChevron onClick={() => history.goBack()}></LeftChevron>
      <RightChevron onClick={() => history.push("/active")}></RightChevron>
      <div
        className="d-flex  justify-content-center align-items-center w-100 flex-column"
        style={{
          height: "70vh",
          backgroundColor: "rgba(255, 255, 255, 0.876)",
        }}
      >
        <Image
          src="https://i.pinimg.com/originals/19/e3/79/19e379ccc6e5099b6278fef0696358b5.png"
          width={200}
          height={200}
          className="mb-0"
          style={{ overflow: "hidden" }}
        ></Image>

        <h5 className="text-capitalize fw-bold fs-1 py-0 my-0"> thank you!</h5>
        <h6 className="py-0 my-0 ">Your order has been placed succesfully</h6>
        <p className="text-muted text-center">
          You will recieve a confirmation message as soon as the order is
          accepted
        </p>
        <p className="text-capitalize fs-1 fw-1">order number: john-4321</p>
        <div className="flex-row">
          <span className="mx-2">
            <Button
              size="sm"
              variant="light"
              className="text-primary border border-primary"
              onClick={() => history.push("/active")}
            >
              Track Order
            </Button>
          </span>
          <span className="mx-2">
            <Button
              size="sm"
              variant="warning"
              className="text-primary border border-primary"
            >
              Continue Shopping
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}
