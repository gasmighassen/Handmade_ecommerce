const express = require("express");
const product = require("../models/product");
const productType = require("../models/productType");
const router = express.Router();

// add product
router.post("/addproduct", async (req, res) => {
  const { ProdName, ProdType, Price } = req.body;
  try {
    const searchedProduct = await product.findOne({ ProdName });
    if (searchedProduct) {
      return res.status(400).send({ msg: "product already exist" });
    }
    const newProduct = new product({
      ProdName,
      ProdType,
      Price,
    });
    let result = await newProduct.save();
    res.send({ result: result, msg: "product added" });
  } catch (error) {
    console.log(error);
  }
});

// add product type
router.post("/addType", async (req, res) => {
  const { ProdType } = req.body;
  try {
    const searchedType = await productType.findOne({ ProdType });
    if (searchedType) {
      return res.status(400).send({ msg: "Type already exist" });
    }
    const newType = new productType({
      ProdType,
    });
    let result = await newType.save();
    res.send({ result: result, msg: "Type added" });
  } catch (error) {
    console.log(error);
  }
});

// get all products
router.get("/allproducts", async (req, res) => {
  try {
    let result = await product.find().populate("ProdType", "ProdType");

    res.send({ products: result, msg: "all products" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
