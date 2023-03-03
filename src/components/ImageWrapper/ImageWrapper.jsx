import React from "react";
import "./ImageWrapper.scss";

export const ImageWrapper = ({ src, title }) => {
  return (
    <div className="image_wrapper">
      <img
        draggable={false}
        src={src}
        alt={title}
        className="image_wrapper_img"
      />
    </div>
  );
};
