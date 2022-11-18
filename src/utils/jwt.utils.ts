import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get("privateKey") as string;

export function sign(object: Object, option?: jwt.SignOptions | undefined){
    return jwt.sign(object, privateKey, option);
};

export function decode(token: string){
    try{
        const decode = jwt.verify(token, privateKey);

        return { valid: true, expired: false, decode };
    }catch(error){
        return {
            valid: false,
            expired: error === "jwt expired",
            decode: null
        };
    }
};