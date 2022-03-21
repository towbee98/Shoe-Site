import React from "react";
import { useParams } from "react-router-dom";
import "./shoeDetails.styles.css";

const ShoeDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Sneaker's detail page:{params.sneakerId}</h1>
    </div>
  );
};

export default ShoeDetailPage;
