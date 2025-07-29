import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Navigate, useNavigate } from "react-router-dom";
import Success from "../page/Success";

const Cart = () => {
  const navigate = useNavigate(); 
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log(cartItems);
  return (
    <>
      <div
        className="position-fixed top-0 end-0 h-100 bg-white d-flex flex-column justify-content-between cartdv py-5 px-2 overflow-hidden"
        style={{
          transform: `translateX(${activeCart ? "0" : "100%"})`,
          transition: "transform 0.4s ease-in-out",
        }}
      >
        <div className="overflow-hidden">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-5">My Order</span>
            <IoMdClose
              onClick={() => setActiveCart(!activeCart)}
              className="fw-bold p-1 fs-4 close-buttondv"
            />
          </div>
          <div className="forcartscrolling">
            {cartItems.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                desc={item.desc}
                name={item.name}
                price={item.price}
                img={item.img}
                rating={item.rating}
                qty={item.qty}
              />
            ))}
          </div>
        </div>

        <div className="px-2 mb-2">
          <h3>Items:{totalQty} </h3>
          <h3>Total Amout: {totalPrice}rs </h3>
          <hr />
          <button
          onClick={()=> navigate("/success")}
            className="fw-bold px-3 text-white py-2 rounded-2"
            style={{
              background: " rgba(111, 233, 111, 1)",
              border: "none",
              width: "90%",
            }}
          >
            Check Out
          </button>
        </div>
      </div>
      
      {!activeCart && (
        <HiMiniShoppingCart 
          className={`rounded-circle  text-white display-4 p-3 position-fixed ${
            totalQty > 0
              ? "animate__animated animate__bounce animate__infinite"
              : ""
          }`}
          style={{
            backgroundColor:" rgb(38, 193, 38)",
            bottom: "80px",
            right: "50px",
            transition: "all 0.3s ease 0.5s",
            cursor: "pointer",
          }}
          onClick={() => setActiveCart(true)}
        />
      )}
    </>
  );
};

export default Cart;
