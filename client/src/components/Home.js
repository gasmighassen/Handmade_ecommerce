import React from "react";
import Discover from "./Discover";
import Item from "./Item";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Promotion from "./Promotion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Promotion />
      <Item />
      <Discover/>
      <Footer/>
    </div>
  );
};

export default Home;
