import {  Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    uidUser: string;
    namefull: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    email: string;
    password: string;
}

const userSchema = new Schema(
    {
        uidUser: { type: String,  required: true},
        namefull: { type: String, required: true },
        phone: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String,  required: true},
        address: {  type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        date_entry: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export default model<IUser>("User", userSchema);