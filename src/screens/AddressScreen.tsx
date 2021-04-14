import React from "react";
import Address from "../componets/Address";
import LeftChevron from "../componets/LeftChevron";
import TopLogo from "../componets/TopLogo";
import { useHistory } from "react-router-dom";
import RightChevron from "../componets/RightChvron";

export default function AddressScreen() {
  const history = useHistory();
  return (
    <>
      <Address></Address>
      <LeftChevron onClick={() => history.goBack()}></LeftChevron>
      <RightChevron onClick={() => history.push("/target")}></RightChevron>
    </>
  );
}
