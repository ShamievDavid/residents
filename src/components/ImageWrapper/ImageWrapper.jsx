import React from "react";
import "./ImageWrapper.scss";

export const ImageWrapper = ({ src, width, height, title }) => {
  const style = {
    width: width,
    height: height,
  };

  return (
    <div className="image_wrapper" style={style}>
      <img
        draggable={false}
        src={src}
        alt={title}
        className="image_wrapper_img"
      />
    </div>
  );
};
