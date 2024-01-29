// routes/users.js

const express = require("express");
const ProductController = require("../src/controllers/ProductController");
const { authenticate } = require("../middlewares/auth");
const  upload  = require("../src/filesystem/filesystem");

const router = express.Router();

const productController = new ProductController()

router.post("/", upload.single('file'), productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/:id", authenticate, productController.getProductById);

router.get("/:category/:id?", authenticate, productController.getProductByQuery);

router.put("/:id", authenticate, productController.updateProduct);

router.delete("/:id", authenticate, productController.deleteProduct);

module.exports = router;