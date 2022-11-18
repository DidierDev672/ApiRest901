import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import { ObjectId } from "mongodb";

import {  getUsersServices, getUserServices, createUserService, updateUserServices, deleteUserService } from "../services/userServices";

export async function getUsersController(_req: Request, res: Response){
    try{
        const users = await getUsersServices();
        res.json(users);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
};

export async function getUserController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const user = await getUserServices(new ObjectId(id));
        res.json(user);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function createUserController(req: Request, res: Response){
    try{
        const {  namefull, phone, country, city, address, email, password } = req.body;
        const newuser: IUser = new User({
            namefull, phone, country, city, address, email, password
        });
        await createUserService(newuser);
        res.json(newuser);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function updateUserController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const user = await updateUserServices(new ObjectId(id), req.body);
        res.json(user);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}

export async function deleteUserController(req: Request, res: Response){
    try{
        const { id } = req.params;
        const user = await deleteUserService(new ObjectId(id));
        res.json(user);
    }catch(error){
        res.status(500).json({ status: 500, message: error });
    }
}