import React from "react";

interface ImageCardProps {
  height: number;
  width: number;
  ImageUrl: string;
}
export default function ImageCard({
  ImageUrl,
  height,
  width,
}: ImageCardProps): JSX.Element {
  return (
    <div
      style={{
        height,
        width,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <img src={ImageUrl} alt="image" height={height} width={width} />
    </div>
  );
}
