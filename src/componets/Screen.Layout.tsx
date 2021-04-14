import React from "react";
import { Button } from "react-bootstrap";
import { Truck, LockFill, AlarmFill, Whatsapp } from "react-bootstrap-icons";
import TopLogo from "./TopLogo";
import StyleSheet from "./Stylesheet";
import IconCaption from "./IconCaption";
import Navigation from "./NavBar";

interface ScreenLayoutProps {
  children: JSX.Element;
}
export default function ScreenLayout({ children }: ScreenLayoutProps) {
  return (
    <>
      <React.Fragment>{children}</React.Fragment>

      <section
        style={styles.middle}
        className="justify-content-center align-items-center my-3"
      >
        <IconCaption
          Icon={<Truck size={40} color="gold"></Truck>}
          caption="Fast Delivery"
        ></IconCaption>
        <IconCaption
          Icon={<LockFill size={40} color="gold"></LockFill>}
          caption="Buyer Protection"
        ></IconCaption>
        <IconCaption
          Icon={<AlarmFill size={40} color="gold"></AlarmFill>}
          caption="Customer Support"
        ></IconCaption>
      </section>
      {/* footer */}
      <section className="h-30 w-100 d-flex justify-content-center align-items-center flex-column">
        <p className="text-muted">Store details</p>
        <strong>Target</strong>
        <p className="text-capitalize text-muted">
          Charm Towers, No 12 nkuruma road, kampala ug
        </p>
        <Button variant="success" size="sm">
          <Whatsapp color="white" size={20}></Whatsapp>
          <span className="ml-1 text-light text-capitalize">chat with us</span>
        </Button>
      </section>
    </>
  );
}

const styles: StyleSheet = {
  middle: {
    backgroundColor: "rgb(5, 142, 255)",
    display: "flex",
    height: "30vh",
    position: "relative",
    top: -16.5,
  },
};
