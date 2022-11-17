import Product, { IProduct } from "../models/Product";
import { ObjectId } from "mongodb";

export async function getProductsServices(){
    try{
        return await Product.find();
    }catch(error){
        console.error(error);
    }
};

export async function getProductServices(id: ObjectId){
    try{
        return await Product.findOne({ _id: id });
    }catch (error){
        console.error(error);
    }
}

export async function createProductServices(product: IProduct){
    try{
        await product.save();
        return product;
    }catch(error){
        console.error(error);
    }
}

export async function updateProductServices(id: ObjectId, product: IProduct){
    try{
        await Product.findByIdAndUpdate({ _id: id }, product);
        return product;
    }catch(error){
        console.error(error);
    }
}

export async function deleteProductService(id: ObjectId){
    try{
        return await Product.findByIdAndDelete({ _id: id });
    }catch(error){
        console.error(error)
    }
}