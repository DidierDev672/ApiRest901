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
exports.deleteShoppingServices = exports.updateShoppingServices = exports.createShoppingServices = exports.getShoppingServices = exports.getShoppingsServices = void 0;
const Shopping_1 = __importDefault(require("../models/Shopping"));
function getShoppingsServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield Shopping_1.default.find();
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getShoppingsServices = getShoppingsServices;
function getShoppingServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield Shopping_1.default.findOne({ _id: id });
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getShoppingServices = getShoppingServices;
function createShoppingServices(shopping) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield shopping.save();
            return shopping;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.createShoppingServices = createShoppingServices;
function updateShoppingServices(id, shopping) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Shopping_1.default.findByIdAndUpdate({ _id: id }, shopping);
            return shopping;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.updateShoppingServices = updateShoppingServices;
function deleteShoppingServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield Shopping_1.default.findByIdAndDelete({ _id: id });
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.deleteShoppingServices = deleteShoppingServices;
