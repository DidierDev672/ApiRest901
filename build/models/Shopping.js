"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ShoppingSchema = new mongoose_1.Schema({
    UidUser: { type: String, required: true },
    IdProduct: { type: String, required: true },
    quantity_product: { type: Number, required: true },
    price_product: { type: Number, required: true },
    name_product: { type: String, required: true },
    category_product: { type: String, required: true },
    codeProduct: { type: String, required: true },
    status_purchase: { type: Boolean, required: true }
});
exports.default = mongoose_1.model("Shopping", ShoppingSchema);
