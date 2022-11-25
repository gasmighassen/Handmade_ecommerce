import React from "react";
import "./style/item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

function ProdCard({ product }) {
  return (
    <Card className="card-general" style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={product.thumbnail}
        style={{ width: "200px", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{product.ProdName}</Card.Title>
        <ReactStars count={product.rate} size={24} activeColor="#ffd700" />
        <Card.Text>{product.Price}$</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProdCard;
