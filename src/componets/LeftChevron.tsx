import React from "react";
import { ChevronLeft } from "react-bootstrap-icons";

interface chevronProps {
  onClick?: () => void;
}
export default function LeftChevron({ onClick }: chevronProps) {
  return (
    <ChevronLeft
      id="leftchevron"
      size={50}
      style={{
        position: "fixed",
        bottom: "50%",
        cursor: "pointer",
        backgroundColor: "rgb(208, 212, 214)",
        height: 70,
        width: 40,
        left: -29,
        borderEndEndRadius: 50,
        borderStartEndRadius: 50,
      }}
      cursor="pointer"
      onClick={onClick}
    ></ChevronLeft>
  );
}

// position: "fixed",
//         bottom: "50%",
//         right: -29,
//         backgroundColor: "rgb(208, 212, 214)",
//         height: 70,
//         width: 40,
//         borderEndEndRadius: 50,
//         borderStartEndRadius: 50,
