"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShoppingController = exports.updateShoppingController = exports.createShoppingController = exports.getShoppingController = exports.getShoppingsController = void 0;
const Shopping_1 = __importDefault(require("../models/Shopping"));
const mongodb_1 = require("mongodb");
const shoppingServices_1 = require("../services/shoppingServices");
function getShoppingsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shopping = yield shoppingServices_1.getShoppingsServices();
            res.json(shopping);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.getShoppingsController = getShoppingsController;
function getShoppingController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const shopping = yield shoppingServices_1.getShoppingServices(new mongodb_1.ObjectId(id));
            res.json(shopping);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.getShoppingController = getShoppingController;
function createShoppingController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { UidUser, IdProduct, quantity_product, price_product, name_product, category_product, codeProduct, status_purchase } = req.body;
            const newshopping = new Shopping_1.default({
                UidUser,
                IdProduct,
                quantity_product,
                price_product,
                name_product,
                category_product,
                codeProduct,
                status_purchase
            });
            yield shoppingServices_1.createShoppingServices(newshopping);
            res.json(newshopping);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.createShoppingController = createShoppingController;
function updateShoppingController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const shopping = yield shoppingServices_1.updateShoppingServices(new mongodb_1.ObjectId(id), req.body);
            res.json(shopping);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.updateShoppingController = updateShoppingController;
function deleteShoppingController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const shopping = yield shoppingServices_1.deleteShoppingServices(new mongodb_1.ObjectId(id));
            res.json(shopping);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.deleteShoppingController = deleteShoppingController;
