import { Request, Response } from "express";
import Shopping, { IShopping } from "../models/Shopping";
import { ObjectId  } from "mongodb";

import { getShoppingsServices, getShoppingServices, createShoppingServices, updateShoppingServices, deleteShoppingServices } from "../services/shoppingServices";

export async function getShoppingsController(_req: Request, res: Response){
    try{
        const shopping = await getShoppingsServices();
        res.json(shopping);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function getShoppingController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const shopping = await getShoppingServices(new ObjectId(id));
        res.json(shopping);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function createShoppingController(req: Request, res: Response){
    try{
        const { UidUser,IdProduct, quantity_product, price_product,name_product, category_product, codeProduct, status_purchase } = req.body;
        const newshopping: IShopping = new Shopping({
            UidUser,
            IdProduct,
            quantity_product,
            price_product,
            name_product,
            category_product,
            codeProduct,
            status_purchase
        });
        await createShoppingServices(newshopping);
        res.json(newshopping);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function updateShoppingController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const shopping = await updateShoppingServices(new ObjectId(id), req.body);
        res.json(shopping);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function deleteShoppingController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const shopping = await deleteShoppingServices(new ObjectId(id));
        res.json(shopping);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}