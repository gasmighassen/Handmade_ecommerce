const express = require("express");

const Types = require("../models/productType");
const router = express.Router();

router.get("/types", async (req, res) => {
  try {
    const result = await Types.find();
    res.send({ types: result, msg: "types retrieved" });
  } catch (error) {
    console.log(error);
  }
});

// add product type
router.post("/addType", async (req, res) => {
  const { ProdType } = req.body;
  try {
    const searchedType = await Types.findOne({ ProdType });
    if (searchedType) {
      return res.status(400).send({ msg: "Type already exist" });
    }
    const newType = new Types({
      ProdType,
    });
    let result = await newType.save();
    res.send({ result: result, msg: "Type added" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
