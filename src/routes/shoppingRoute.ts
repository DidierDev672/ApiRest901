import { Router } from "express";
import { getShoppingsController, getShoppingController, createShoppingController, updateShoppingController, deleteShoppingController } from "../controllers/shoppingController";

class Shopping{
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    };

    routes(){
        this.router.get("/", getShoppingsController);
        this.router.get("/:id", getShoppingController);
        this.router.post("/", createShoppingController);
        this.router.put("/:id", updateShoppingController);
        this.router.delete("/:id", deleteShoppingController);
    }
}

const shopping = new Shopping();
export default shopping.router;