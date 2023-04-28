import React from "react";
import "./Card.css";
const Card = ({ productDetails }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={productDetails.productPic} alt="product-pic" />
        <h5 className="itemName">{productDetails.productName}</h5>
        <p className="productInfo">{productDetails.productDescription}</p>
        <p className="itemCost">{productDetails.Price}</p>
        <p>Rating: 4</p>
        <button
          onClick={() =>
            alert(
              `Product of card  ${productDetails.productId} , which is of brand ${productDetails.productName} worth ${productDetails.Price} is added in the cart , please proceed to pay !!! `
            )
          }
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
export default Card;
