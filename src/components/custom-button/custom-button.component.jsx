import React from "react";
import "./custom-button.styles.css";
const SubmitBtn = ({ children, secondary, ...otherProps }) => {
  return secondary ? (
    <button className="custom-button secondary" {...otherProps}>
      {children}
    </button>
  ) : (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default SubmitBtn;
