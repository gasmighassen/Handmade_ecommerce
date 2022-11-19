const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema(
  {
    ProdName: {
      type: String,
      required: true,
    },
    ProdType: {
      type: mongoose.Types.ObjectId,
      ref: "ProductType",
    },
    gallerie: {
      type: mongoose.Types.ObjectId,
      ref: "Gallerie",
    },
    Price: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
