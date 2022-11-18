"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class Product {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", productController_1.getProductsController);
        this.router.get("/:id", productController_1.getProductController);
        this.router.post("/", productController_1.createProductController);
        this.router.put("/:id", productController_1.updateProductController);
        this.router.delete("/:id", productController_1.deleteProductController);
    }
}
const product = new Product();
exports.default = product.router;
