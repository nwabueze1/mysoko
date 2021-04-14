import React from "react";

interface IconCaptionProps {
  Icon: JSX.Element;
  caption: string;
  className?: string;
}
export default function IconCaption({ caption, Icon }: IconCaptionProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 200,
        color: "white",
      }}
    >
      {Icon && Icon}
      <p style={{ color: "white" }}>{caption}</p>
    </div>
  );
}
