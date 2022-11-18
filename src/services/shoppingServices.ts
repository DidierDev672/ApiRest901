import Shopping, { IShopping } from "../models/Shopping";
import { ObjectId } from "mongodb";

export async function getShoppingsServices(){
    try{
        return await Shopping.find();
    }catch(error){
        console.error(error);
    }
}

export async function getShoppingServices(id: ObjectId){
    try{
        return await Shopping.findOne({ _id: id });
    }catch(error){
        console.error(error)
    }
}

export async function createShoppingServices(shopping: IShopping){
    try{
        await shopping.save();
        return shopping;
    }catch(error){
        console.error(error);
    }
}

export async function updateShoppingServices(id: ObjectId, shopping: IShopping){
    try{
        await Shopping.findByIdAndUpdate({ _id: id }, shopping);
        return shopping;
    }catch(error){
        console.error(error);
    }
}

export async function deleteShoppingServices(id: ObjectId){
    try{
        return await Shopping.findByIdAndDelete({ _id: id });
    }catch(error){
        console.error(error);
    }
}