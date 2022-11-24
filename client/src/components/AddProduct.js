import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";

function AddProduct() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.product?.types);
  console.log(types);
  const [product, setproduct] = useState({
    ProdName: "",
    ProdType: "",
    Price: 0,
  });
  console.log(product);
  return (
    <div className="productAdd">
      <h3>Product title</h3>
      <input
        type="text"
        name="ProdName"
        onChange={(e) => setproduct({ ...product, ProdName: e.target.value })}
      />
      <h5>
        Product Type
        <span className="required">*</span>
      </h5>

      <select
        className="ProdType"
        onChange={(e) => setproduct({ ...product, ProdType: e.target.value })}
      >
        <option selected></option>
        {types.map((el) => (
          <>
            <option value={el?._id}>{el?.ProdType}</option>
          </>
        ))}
      </select>
      <input
        type="number"
        name="price"
        onChange={(e) => setproduct({ ...product, Price: e.target.value })}
      />
      <button onClick={() => dispatch(addProduct(product))}>Add Product</button>
    </div>
  );
}

export default AddProduct;
