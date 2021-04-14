import React from "react";
import StyleSheet from "./Stylesheet";

interface listItemProps {
  title?: string;
  subtitle?: string;
  Icon?: JSX.Element;
  IconSize: number;
  backgroundColor?: string;
  className?: string;
}

export default function ListItem({
  IconSize,
  subtitle,
  title,
  backgroundColor,
  Icon,
  className,
}: listItemProps): JSX.Element {
  return (
    <div style={styles.container}>
      <div
        style={{
          borderRadius: backgroundColor ? 30 : 0,
          marginRight: backgroundColor ? 20 : 0,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor,
          height: IconSize * 2,
          width: IconSize * 2,
        }}
      >
        {Icon && Icon}
      </div>
      <div style={styles.containerText} className={className}>
        {title && <strong style={styles.title}>{title}</strong>}
        {subtitle && (
          <span style={styles.subTitle} className="text-capitalize">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  container: {
    display: "flex",
  },
  containerLogo: {},
  containerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
  },
};
