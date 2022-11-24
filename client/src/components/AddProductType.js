import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addType } from "../redux/slices/productSlice";
function AddProductType() {
  const dispatch = useDispatch();
  const [Type, setType] = useState({ ProdType: "" });

  return (
    <div className="proTypeAdd">
      <div className="typeAdd">
        <h3>add new type of product</h3>
        <input
          type="text"
          name="typeProd"
          onChange={(e) => setType({ ...Type, ProdType: e.target.value })}
        />
        <button onClick={() => dispatch(addType(Type))}> Add</button>
      </div>
    </div>
  );
}

export default AddProductType;
