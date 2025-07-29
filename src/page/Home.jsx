import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import Fooditem from "../components/Fooditem";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <CategoryMenu></CategoryMenu>
<Fooditem></Fooditem>
<Cart></Cart>
    </>
  );
};

export default Home;
