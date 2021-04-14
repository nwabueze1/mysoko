import React from "react";
import { BagFill, Person, Shop } from "react-bootstrap-icons";
import ListItem from "../ListItem";
import TopLogo from "../TopLogo";
import { useHistory } from "react-router-dom";
import { Badge } from "react-bootstrap";

export default function CustomNabar() {
  const [isactive, setIsactive] = React.useState<string>("");
  const history = useHistory();
  return (
    <>
      <TopLogo title="store made with sako"></TopLogo>
      <div id="custom-navbar">
        <div className="ml-4" onClick={() => history.push("/")}>
          <ListItem
            IconSize={30}
            Icon={
              <div
                style={{
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                  backgroundColor: "lightgrey",
                  fontSize: "50%",
                }}
              >
                <Shop size={30}></Shop>
              </div>
            }
            title="Target"
            subtitle="Charm Towers, Plot 12 Nkruma road, kampala,ug"
          ></ListItem>
        </div>
        <div
          className={isactive === "bag" ? "active text-muted" : " text-muted"}
          onClick={() => {
            setIsactive("bag");
            history.push("/bag");
          }}
        >
          <strong>
            <BagFill size={25}></BagFill>bag
            <Badge
              variant="danger"
              style={{ position: "relative", bottom: 10, marginLeft: 2 }}
            >
              2
            </Badge>
          </strong>
        </div>
        <div
          onClick={() => {
            setIsactive("account");
            history.push("/account");
          }}
          className={
            isactive === "account" ? "active text-muted" : "text-muted"
          }
        >
          <Person size={25}></Person>
          Account
        </div>
      </div>
    </>
  );
}
