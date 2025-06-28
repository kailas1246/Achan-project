import express from "express";
const router = express.Router();
const {
  createIssuedProduct,
  getIssuedProducts,
  deleteIssuedProduct,
} = require("../controllers/issuedProductController.js");

router.post("/", createIssuedProduct);
router.get("/", getIssuedProducts);
router.delete("/:id", deleteIssuedProduct);

export default router
