const mongoose = require("mongoose");
const schema = mongoose.Schema;

const MediaSchema = new schema(
  {
    Product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    images: [
      {
        url: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", MediaSchema);
