import React from "react";
import { useNavigate } from "react-router-dom";

import "./collection.item.styles.css";

const CollectionItem = ({ id, name, price, image }) => {
  let navigate = useNavigate();
  return (
    <div
      className="collection-item"
      key={id}
      onClick={() => {
        navigate(`../sneakers/${id}`, { replace: false });
      }}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
        }}
      />

      <div className="details">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
