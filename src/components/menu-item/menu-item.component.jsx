import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = (props) => {
  let navigate = useNavigate();
  return (
    <div
      className="menu-item"
      onClick={() => {
        navigate(`sneakers/${props.id}`, { replace: false });
      }}
    >
      <div className="content">
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`,
          }}
          className="shoe-image"
        ></div>
        <div className="details">
          <div className="name">{props.title}</div>
          <span className="price">
            {props.currency}
            {props.price}
          </span>
          <div className="ratings"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
