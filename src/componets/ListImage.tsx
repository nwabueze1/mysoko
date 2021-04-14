import React from "react";
import { Button } from "react-bootstrap";
import StyleSheet from "./Stylesheet";
import { useHistory } from "react-router-dom";

interface ListImageProps {
  buttonTitle: string;
  Image: JSX.Element;
  title: string;
  subtitle: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
}
export default function ListImage({
  buttonTitle,
  handleClick,
  Image,
  subtitle,
  title,
  id,
}: ListImageProps) {
  const history = useHistory();
  return (
    <div style={styles.container} className="my-2 ">
      {Image && Image}

      <div style={styles.text_container} className="ml-3" id="listtext">
        <span id="list" onClick={() => history.push(`/products/${id}`)}>
          {title && <strong style={styles.title}>{title}</strong>}
          <br />
          {subtitle && <span style={styles.subTitle}>{subtitle}</span>}
        </span>
        {/* <Button size="sm" variant="secondary" id="wells">
          add
        </Button> */}
        {buttonTitle && (
          <Button
            id="buttonlist"
            onClick={handleClick}
            variant="secondary"
            size="sm"
            style={{ width: 60, alignSelf: "flex-end" }}
          >
            +{buttonTitle}
          </Button>
        )}
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  text_container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  title: {
    color: "#000",
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
  },
};
