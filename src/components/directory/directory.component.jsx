import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
//import { getShoeDetails } from "../../redux/shop/shop.action";

const Directory = ({ shoeItems }) => {
  console.log(shoeItems);

  return (
    <div className="directory-menu">
      {shoeItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            currency={item.currency}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoeItems: state.shop.shoeItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   getShoeDetails: (shop) => dispatch(getShoeDetails(shop)),
// });

export default connect(mapStateToProps)(Directory);
