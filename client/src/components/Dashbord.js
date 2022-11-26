import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getType, allProducts } from "../redux/slices/productSlice";
import { userCurrent } from "../redux/slices/userSlice";
import AddProduct from "./AddProduct";
import AddProductType from "./AddProductType";
import ProductsTable from "./ProductsTable";

function Dashbord() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.product);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getType());
    dispatch(allProducts());
  }, [products]);

  return (
    <div>
      <AddProductType />
      <AddProduct />
      <ProductsTable elements={products} />
    </div>
  );
}

export default Dashbord;
