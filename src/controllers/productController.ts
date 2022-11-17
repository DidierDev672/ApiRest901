import { Request, Response } from "express";
import Product, { IProduct } from "../models/Product";
import { ObjectId } from "mongodb";

import { getProductsServices, getProductServices, createProductServices, updateProductServices, deleteProductService } from "../services/productServices";

export async function getProductsController(_req: Request, res: Response){
    try{
        const products = await getProductsServices();
        res.json(products);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function getProductController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const product = await getProductServices(new ObjectId(id));
        res.json(product);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function createProductController (req: Request, res: Response){
    try{
        const { name_product, category, price, quantity, description, coverURL } = req.body;
        const newproduct: IProduct = new Product({ name_product, category, price, quantity, description, coverURL });
        await createProductServices(newproduct);
        res.json(newproduct);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function updateProductController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const product = await updateProductServices(new ObjectId(id), req.body);
        res.json(product);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function deleteProductController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const product = await deleteProductService(new ObjectId(id));
        res.json(product);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}