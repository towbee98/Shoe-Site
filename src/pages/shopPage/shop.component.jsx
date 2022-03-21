import React from "react";
import SHOPDATA from "./shop.data.js";

import CollectionPreview from "../../components/preview-collection/preview.collection.component.jsx";

class ShoePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((element) => (
          <CollectionPreview
            key={element.id}
            title={element.title}
            items={element.items}
          />
        ))}
      </div>
    );
  }
}

export default ShoePage;
