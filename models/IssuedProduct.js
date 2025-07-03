const mongoose = require("mongoose");

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
  remarks: String,
});

module.exports = mongoose.model("IssuedProduct", IssuedProductSchema);
