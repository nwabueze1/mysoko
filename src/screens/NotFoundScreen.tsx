import React from "react";
import RightChevron from "../componets/RightChvron";
import { useHistory } from "react-router-dom";

export default function NotFoundScreen() {
  const history = useHistory();
  React.useEffect(() => {
    document.title = "oops";
  }, []);
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      id="not-found"
    >
      <RightChevron onClick={() => history.goBack()}></RightChevron>
    </div>
  );
}
