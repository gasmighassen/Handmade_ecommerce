const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    comands: {
      type: mongoose.Types.ObjectId,
      ref: "Comande",
      required: false,
    },
    shippingAdresse: {
      type: mongoose.Types.ObjectId,
      ref: "Shipping",
      required: false,
    },
    isVendor: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
