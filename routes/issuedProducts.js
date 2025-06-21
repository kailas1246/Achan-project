const express = require("express");
const router = express.Router();
const {
  createIssuedProduct,
  getIssuedProducts,
} = require("../controllers/issuedProductController");

router.post("/", createIssuedProduct);
router.get("/", getIssuedProducts);

module.exports = router;
