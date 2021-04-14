import React from "react";
import { Container } from "react-bootstrap";
import Address from "../componets/Address";
import { useHistory } from "react-router-dom";

export default function AccountScreen() {
  const history = useHistory();
  React.useEffect(() => {
    document.title = "accounts";
  }, []);
  return (
    <React.Fragment>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
        <p className="ml-5 mb-0">
          <strong>09032295542</strong>
        </p>
        <p className="text-right mr-5 pr-3 mb-0">
          <span
            className="border px-4 py-1 border-2"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/logout")}
          >
            Logout
          </span>
        </p>
      </div>
      <hr className="text-muted" />
      <Container>
        <Address></Address>
      </Container>
    </React.Fragment>
  );
}
