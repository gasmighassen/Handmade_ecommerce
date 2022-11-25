import React from "react";
import "./style/item.css";
import ProdCard from "./ProdCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Item = () => {
  const products = useSelector((state) => state?.product?.product);
  return (
    <div className="card-container">
      <h1>Popular gifts right now</h1>
      <div className="card-list">
        {products.map((product) => (
          <Link to={`/listing/${product._id}`} state={product}>
            <ProdCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Item;
