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
exports.deleteProductController = exports.updateProductController = exports.createProductController = exports.getProductController = exports.getProductsController = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const mongodb_1 = require("mongodb");
const productServices_1 = require("../services/productServices");
function getProductsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield productServices_1.getProductsServices();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.getProductsController = getProductsController;
function getProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield productServices_1.getProductServices(new mongodb_1.ObjectId(id));
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.getProductController = getProductController;
function createProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name_product, category, price, quantity, description, coverURL } = req.body;
            const newproduct = new Product_1.default({ name_product, category, price, quantity, description, coverURL });
            yield productServices_1.createProductServices(newproduct);
            res.json(newproduct);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.createProductController = createProductController;
function updateProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield productServices_1.updateProductServices(new mongodb_1.ObjectId(id), req.body);
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.updateProductController = updateProductController;
function deleteProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield productServices_1.deleteProductService(new mongodb_1.ObjectId(id));
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.deleteProductController = deleteProductController;
