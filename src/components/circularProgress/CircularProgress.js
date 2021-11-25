import React from "react";
import cssStyle from "./circularProgress.module.css";

function CircularProgress({ color, size }) {
  const colors = {
    main: cssStyle.green,
    white: cssStyle.white,
  };

  const sizes = {
    small: cssStyle.small,
    medium: cssStyle.medium,
  };

  const selectedColor = colors[color];
  const selectedSize = sizes[size];

  return (
    <progress
      className={`${cssStyle.circularProgress} ${selectedColor} ${selectedSize}`}
    />
  );
}

export default CircularProgress;