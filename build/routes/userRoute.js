"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class User {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    ;
    routes() {
        this.router.get("/", userController_1.getUsersController);
        this.router.get("/:id", userController_1.getUserController);
        this.router.post("/", userController_1.createUserController);
        this.router.put("/:id", userController_1.updateUserController);
        this.router.delete("/:id", userController_1.deleteUserController);
    }
    ;
}
;
const user = new User();
exports.default = user.router;
