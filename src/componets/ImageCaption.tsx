import React from "react";
import { Image } from "react-bootstrap";
import StyleSheet from "./Stylesheet";

interface ImageCaptionProps {
  imageUrl: string;
  title: string;
}
export default function ImageCaption({ imageUrl, title }: ImageCaptionProps) {
  return (
    <React.Fragment>
      <div style={styles.container} className="m-1">
        <Image
          src={imageUrl}
          height={120}
          width={120}
          style={{ borderRadius: 10 }}
        ></Image>
        <p
          style={{
            width: 140,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
      </div>
    </React.Fragment>
  );
}

const styles: StyleSheet = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 150,
    cursor: "pointer",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  p: {
    width: 100,
  },
};
