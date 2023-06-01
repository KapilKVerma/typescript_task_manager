import express from "express";
import validateResource from "../middleware/validateResource";
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "../schema/product.schema";
import {
  createProductHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductsHandler,
} from "../controller/product.controller";
import requireUser from "../middleware/requireUser";

const router = express.Router();

router.post(
  "/products",
  [requireUser, validateResource(createProductSchema)],
  createProductHandler
);

router.get(
  "/products/:productId",
  validateResource(getProductSchema),
  getProductHandler
);

router.get("/products", requireUser, getProductsHandler);

router.put(
  "/products/:productId",
  [requireUser, validateResource(updateProductSchema)],
  updateProductHandler
);

router.delete(
  "/products/:productId",
  [requireUser, validateResource(deleteProductSchema)],
  deleteProductHandler
);

export default router;
