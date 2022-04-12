import React from "react";
import "./message.styles.css";
import { MdError } from "react-icons/md";

const Message = (props) => {
  //console.log(props);
  return (
    <div className="response-message">
      {props.error ? <MdError className="error-message" /> : null}
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default Message;
