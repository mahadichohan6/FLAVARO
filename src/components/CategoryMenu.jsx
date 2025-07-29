import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../REDUX/slices/CategorySlices";
import FoodData from "../data/FoodDATA";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = ["All", ...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="categoryelement">
      <div className="container">
        <div className="row">
          <h3>Find The Best Food</h3>
          <div className="d-flex gap-2 forscroll mt-3">
            {categories.map((category, index) => (
              <button
                onClick={() =>
                  dispatch(setCategory(category === "All" ? "" : category))
                }
               className={`px-3 py-2 text-center buttonall flex-column flex-lg-row rounded-1 ${
    (selectedCategory === "" && category === "All") || selectedCategory === category
      ? "whenactivedv"
      : ""
  }`}
                key={index}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
