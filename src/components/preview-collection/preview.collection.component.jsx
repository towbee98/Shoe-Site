import React from "react";

import "./preview.collection.styles.css";
import CollectionItem from "../collection-item/collection.item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
