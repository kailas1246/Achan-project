import express from "express";
const router = express.Router();
import {
  createIssuedProduct,
  getIssuedProducts,
  deleteIssuedProduct,
} from"../controllers/issuedProductController.js"

router.post("/", createIssuedProduct);
router.get("/", getIssuedProducts);
router.delete("/:id", deleteIssuedProduct);

export default router
