import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getType } from "../redux/slices/productSlice";
import { userCurrent } from "../redux/slices/userSlice";
import AddProduct from "./AddProduct";
import AddProductType from "./AddProductType";

function Dashbord() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getType());
  }, []);
  return (
    <div>
      <AddProductType />
      <AddProduct />
    </div>
  );
}

export default Dashbord;
