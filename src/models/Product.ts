import { Schema, model, Document  } from "mongoose";

export interface IProduct extends Document {
    name_product: string;
    category: string;
    quantity: number;
    price: number;
    description: string;
    coverURL: string;
};

const ProductSchema = new Schema(
    {
        name_product: { type: String, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, require: true },
        price: { type: Number, required: true },
        description: { type: String, required: true, },
        coverURL: { type: String, require: true },
        date_entry: { type: Date, default: Date.now }
    }
);

export default model<IProduct>("Product", ProductSchema);