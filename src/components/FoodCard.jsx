  import React from "react";
  import { AiFillStar } from "react-icons/ai";
  import { useDispatch } from "react-redux";
  import { addToCart } from "../REDUX/slices/CartSlices";

  const FoodCard = ({ id, name, price, img, desc, rating, category ,handleToast}) => {
    const dispatch = useDispatch();
    return (
      <div className="foodcard1 mt-5 px-2 py-2">
        <img src={img} alt="" />
        <div className="d-flex justify-content-between mt-3">
          <h2 className="fs-6">{name}</h2>
          <span style={{ color: " rgb(38, 193, 38)" }}>{price}rs</span>
        </div>
        <p style={{ fontSize: "smaller", fontWeight: 400 }}>
          {desc?.slice(0, 50)}...
        </p>
        <div className="d-flex justify-content-between">
          <span className="d-flex justify-content-between align-items-center">
            <AiFillStar />
            {rating}
          </span>
          <button
            className="p-1 text-white btn"
            onClick={() => {
              dispatch(addToCart({ id, name, price, img, rating, qty: 1 }))
              handleToast();
            }}
            style={{
              backgroundColor: "#22c55e",
              fontSize: "small",
              fontWeight: "bold",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  };

  export default FoodCard;
