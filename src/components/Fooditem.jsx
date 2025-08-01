import React from "react";
import FoodCard from "./FoodCard";
import FoodDATA from "../data/FoodDATA";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditem = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = () => {
    toast.success("Your Order Has Been Added To Cart Successfully");
  };

  const filteredFood = (selectedCategory
  ? FoodDATA.filter((food) => food.category === selectedCategory)
  : FoodDATA
).filter((food) =>
  food.name.toLowerCase().includes(search.toLowerCase())
);

// justify-content-lg-between justify-content-center
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="fooditemdv">
        <div className="container">
          <div className="col-md-12">
            <div className="d-flex flex-wrap gap-4 justify-content-center my-5 pb-5">
              {filteredFood.map((food) => (
                <FoodCard
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  img={food.img}
                  price={food.price}
                  category={food.category}
                  desc={food.desc}
                  rating={food.rating}
                  qty={food.qty}
                  handleToast={handleToast}
                  
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fooditem;
