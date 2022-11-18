"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const ProductSchema = new mongoose_1.Schema({
    name_product: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, require: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, },
    coverURL: { type: String, require: true },
    date_entry: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model("Product", ProductSchema);
