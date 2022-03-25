import React from "react";
//import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import "./form-input.styles.css";

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  //console.log(otherProps.value.length);
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        onChange={handleChange}
        //  {type=="password" && label=="text"?<MdVisibility/>:<MdVisibilityOff/>}
        {...otherProps}
      />
      {label ? <label className="form-input-label">{label}</label> : null}
    </div>
  );
};

export default FormInput;
