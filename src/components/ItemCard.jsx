import React from "react";
import { LiaPlusSquareSolid } from "react-icons/lia";
import { CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../REDUX/slices/CartSlices";
import { incrementQty,decrementQty } from "../REDUX/slices/CartSlices";

const ItemCard = ({ id, img, qty, name, price, category, rating }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-2 shadow rounded p-2 mt-4">
      <img
        src={img}
        style={{ objectFit: "cover", height: "50px", width: "50px" }}
        alt=""
      />
      <div className="lh-sm w-100">
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold text-secondary fs-5">{name}</h2>
          <MdDelete
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeFromCart({ id }))
          
          }
          />
        </div>

        <div
          className="d-flex justify-content-between position-relative gap-2"
          style={{ width: "100%" }}
        >
          <span style={{ color: "rgb(38, 193, 38)" }} className="fw-bold">
            {price}rs
          </span>
          <div className="d-flex align-items-center gap-1">
            <CiSquareMinus className="text-secondary fs-5 fw-bold"  onClick={()=>qty>=1? dispatch(decrementQty({id})):(qty=0)} />
            <span>{qty}</span>

            <LiaPlusSquareSolid onClick={()=>qty>=1? dispatch(incrementQty({id})):(qty=0)}   className="text-secondary fs-5 fw-bold" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
