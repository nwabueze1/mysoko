import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

interface Props {
  onClick?: () => void;
}
export default function RightChevron({ onClick }: Props) {
  return (
    <ChevronRight
      id="chevronright"
      size={20}
      style={{
        position: "fixed",
        bottom: "50%",
        right: -29,
        backgroundColor: "rgb(208, 212, 214)",
        height: 80,
        width: 40,
        borderStartStartRadius: 50,
        borderEndStartRadius: 50,
      }}
      cursor="pointer"
      onClick={onClick}
    ></ChevronRight>
  );
}
