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
exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.getUserController = exports.getUsersController = void 0;
const User_1 = __importDefault(require("../models/User"));
const mongodb_1 = require("mongodb");
const userServices_1 = require("../services/userServices");
function getUsersController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userServices_1.getUsersServices();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.getUsersController = getUsersController;
;
function getUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield userServices_1.getUserServices(new mongodb_1.ObjectId(id));
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.getUserController = getUserController;
function createUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { namefull, phone, country, city, address, email, password } = req.body;
            const newuser = new User_1.default({
                namefull, phone, country, city, address, email, password
            });
            yield userServices_1.createUserService(newuser);
            res.json(newuser);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.createUserController = createUserController;
function updateUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield userServices_1.updateUserServices(new mongodb_1.ObjectId(id), req.body);
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.updateUserController = updateUserController;
function deleteUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield userServices_1.deleteUserService(new mongodb_1.ObjectId(id));
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    });
}
exports.deleteUserController = deleteUserController;
