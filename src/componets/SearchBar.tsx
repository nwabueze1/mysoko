import React, { MouseEventHandler } from "react";
import { Search } from "react-bootstrap-icons";
import { FormControl, InputGroup } from "react-bootstrap";
import Stylesheet from "./Stylesheet";

interface SearchBarProps {
  OnChange?: React.ChangeEventHandler<HTMLInputElement>;
  OnClick?: MouseEventHandler<HTMLDivElement>;
  Value?: string;
  style?: Stylesheet;
}
export default function SearchBar({
  OnChange,
  OnClick,
  Value,
  style,
}: SearchBarProps) {
  return (
    <InputGroup className="mb-3 px-2" id="searchBars" style={style}>
      <FormControl
        placeholder="Search for products..."
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={Value}
        onChange={OnChange}
      />
      <InputGroup.Append onClick={OnClick}>
        <InputGroup.Text
          id="basic-addon1"
          style={{ backgroundColor: "gold", cursor: "pointer" }}
        >
          <Search size={20} color="blue"></Search>
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
}
