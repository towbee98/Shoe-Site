import React from "react";

import "./collection.item.component.css";

const CollectionItem = ({ id, name, price, image }) => {
  return (
    <div className="collection-item" key={id}>
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
