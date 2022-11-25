const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ShippingSchema = new schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  adresse: [
    {
      country: String,
      city: String,
      street: String,
      appartment: String,
      zipcode: String,
    },
  ],
});

module.exports = mongoose.model("Shipping", ShippingSchema);
