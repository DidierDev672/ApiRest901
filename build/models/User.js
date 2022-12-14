"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    uidUser: { type: String, required: true },
    namefull: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date_entry: { type: Date, default: Date.now }
}, { timestamps: true });
exports.default = mongoose_1.model("User", userSchema);
