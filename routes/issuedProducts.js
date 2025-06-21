const express = require("express");
const router = express.Router();
const {
  createIssuedProduct,
  getIssuedProducts,
  deleteIssuedProduct,
} = require("../controllers/issuedProductController");

router.post("/", createIssuedProduct);
router.get("/", getIssuedProducts);
router.delete("/:id", deleteIssuedProduct);

module.exports = router;
