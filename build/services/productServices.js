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
exports.deleteProductService = exports.updateProductServices = exports.createProductServices = exports.getProductServices = exports.getProductsServices = void 0;
const Product_1 = __importDefault(require("../models/Product"));
function getProductsServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield Product_1.default.find();
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getProductsServices = getProductsServices;
;
function getProductServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield Product_1.default.findOne({ _id: id });
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getProductServices = getProductServices;
function createProductServices(product) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield product.save();
            return product;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.createProductServices = createProductServices;
function updateProductServices(id, product) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Product_1.default.findByIdAndUpdate({ _id: id }, product);
            return product;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.updateProductServices = updateProductServices;
function deleteProductService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield Product_1.default.findByIdAndDelete({ _id: id });
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.deleteProductService = deleteProductService;
