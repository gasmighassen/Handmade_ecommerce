import React, { useEffect } from "react";
import Discover from "./Discover";
import Item from "./Item";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Promotion from "./Promotion";
import { useDispatch } from "react-redux";
import { userCurrent } from "../redux/slices/userSlice";
import { getType } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getType());
  }, []);

  return (
    <div>
      <Navbar />
      <Promotion />
      <Item />
      <Discover />
      <Footer />
    </div>
  );
};

export default Home;
