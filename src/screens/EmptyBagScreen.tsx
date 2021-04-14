import React from "react";
import { Button, Image } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import StyleSheet from "../componets/Stylesheet";
import { useHistory } from "react-router-dom";
import TopLogo from "../componets/TopLogo";
import NavBar from "./componets/NavBar";
import LeftChevron from "../componets/LeftChevron";
import RightChevron from "../componets/RightChvron";

export default function EmptyBagScreen() {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)", minHeight: "100vh" }}>
      <hr className="py-0 text-muted py-0" />
      <LeftChevron onClick={() => history.goBack()}></LeftChevron>
      <RightChevron onClick={() => history.push("/success")}></RightChevron>
      <div style={styles.container}>
        <Image
          src="https://www.clipartkey.com/mpngs/m/264-2643559_hmm-emoji-png-transparent-background-confused-emoji.png"
          width={150}
          height={150}
          className="text-muted mb-2"
          style={{ borderRadius: 75 }}
        ></Image>

        <strong className="text-muted mb-1">it's empty here</strong>
        <p>start shopping to add items to your bag</p>
        <Button
          variant="warning"
          className="text-primary mt-3"
          onClick={() => history.push("/")}
        >
          <span className="fw-bold">Back to homepage</span>
        </Button>
      </div>
    </div>
  );
}
const styles: StyleSheet = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "70vh",
  },
};
