"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shoppingController_1 = require("../controllers/shoppingController");
class Shopping {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    ;
    routes() {
        this.router.get("/", shoppingController_1.getShoppingsController);
        this.router.get("/:id", shoppingController_1.getShoppingController);
        this.router.post("/", shoppingController_1.createShoppingController);
        this.router.put("/:id", shoppingController_1.updateShoppingController);
        this.router.delete("/:id", shoppingController_1.deleteShoppingController);
    }
}
const shopping = new Shopping();
exports.default = shopping.router;
