const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CommentsSchema = new schema(
  {
    ProdId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    comment: { type: String },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", CommentsSchema);
