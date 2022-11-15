"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // EsModule y commonJS
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json
const PORT = 3000;
app.get("/ping", function (_req, res) {
    console.log("Someone pinged here!!");
    res.send("pong");
});
app.use("/api/diaries", diaries_1.default);
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});
