import User, { IUser } from "../models/User";
import { ObjectId } from "mongodb";

export async function getUsersServices(){
    try{
        return await User.find();
    }catch(error){
        console.error(error);
    }
};

export async function getUserServices(id: ObjectId){
    try{
        return await User.findOne({ _id: id });
    }catch(error){
        console.error(error);
    }
};

export async function createUserService(user: IUser){
    try{
        await user.save();
        return user;
    }catch(error){
        console.error(error);
    }
};

export async function updateUserServices(id: ObjectId, user: IUser){
    try{
        await User.findByIdAndUpdate({ _id: id }, user);
        return user;
    }catch(error){
        console.error(error);
    }
};

export async function deleteUserService(id: ObjectId){
    try{
        return await User.findByIdAndDelete({ _id: id });
    }catch(error){
        console.error(error);
    }
}