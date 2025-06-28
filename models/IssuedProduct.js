import mongoose = from "mongoose";

const IssuedProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  issuedTo: { type: String, required: true },
  issuedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("IssuedProduct", IssuedProductSchema);
