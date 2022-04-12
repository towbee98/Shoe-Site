import React from "react";

import "./cart-icon.styles.css";
import { FaCartPlus } from "react-icons/fa";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <FaCartPlus className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
