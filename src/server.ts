import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/productRoute";
import usersRoutes from "./routes/userRoute";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

class Server {
    public app: express.Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        // Connection mongoDB atlas
        const mongodb_atlas = "mongodb+srv://ariasd672:123@cluster0.wmwjk.mongodb.net/901-data?retryWrites=true&w=majority";
        mongoose
            .connect(mongodb_atlas)
            .then(() => console.log("Connected to database"))
            .catch((error) => { console.error(`Error connecting to the database. \n${error}`) });

        // Settings
        this.app.set("port", process.env.PORT || 3005);
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false  }));
        this.app.use(morgan("dev"));
        this.app.use(cors());
    }

    routes(){
        this.app.use("/api/products", productsRoutes);
        this.app.use("/api/users", usersRoutes);
    }

    start(){
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server on port: ${this.app.get("port")}`);
        });
    }
}

const server = new Server();
server.start();