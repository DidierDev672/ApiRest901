"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const shoppingRoute_1 = __importDefault(require("./routes/shoppingRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // Connection mongoDB atlas
        const mongodb_atlas = process.env.DB_CONN_STRIGN;
        mongoose_1.default
            .connect(mongodb_atlas)
            .then(() => console.log("Connected to database"))
            .catch((error) => { console.error(`Error connecting to the database. \n${error}`); });
        // Settings
        this.app.set("port", process.env.PORT || 3005);
        //Middlewares
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use("/api/products", productRoute_1.default);
        this.app.use("/api/users", userRoute_1.default);
        this.app.use("/api/shoppings", shoppingRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server on port: ${this.app.get("port")}`);
        });
    }
}
const server = new Server();
server.start();
