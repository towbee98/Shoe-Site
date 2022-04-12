import React from "react";
import { useParams } from "react-router-dom";
import "./shoeDetails.styles.css";
import { connect } from "react-redux";
import SubmitBtn from "../../components/custom-button/custom-button.component";
//import { getShoeDetails } from "../../redux/shop/shop.action";

const ShoeDetailPage = (props) => {
  const params = useParams();
  console.log(params.sneakerId);
  const selectedShoeItem = props.shoeItems[params.sneakerId - 1];
  console.log(selectedShoeItem);
  return (
    <div>
      <div className="shoe-details">
        <div
          className="single-shoe-image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + selectedShoeItem.image
            })`,
          }}
        ></div>
        <div className="important-shoe-details">
          <h2 className="shoe-name">{selectedShoeItem.title}</h2>
          <span className="shoe-price">
            {selectedShoeItem.currency} {selectedShoeItem.price}
          </span>
          <div className="shoe-variation">
            <span>Variation Available</span>
            <span className="size"></span>
          </div>
        </div>
        <div className="other-images"></div>
        <SubmitBtn children={"ADD TO CART"} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  shoeItems: state.shop.shoeItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   getShoeDetails: (shop) => dispatch(getShoeDetails(shop)),
// });
export default connect(mapStateToProps)(ShoeDetailPage);
