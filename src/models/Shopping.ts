import { Schema, model, Document  } from "mongoose";

export interface IShopping extends Document {
    UidUser: String;
    IdProduct: String;
    quantity_product: Number;
    price_product: Number;
    name_product: String;
    category_product: String;
    codeProduct: String;
    status_purchase: Boolean;
}

const ShoppingSchema = new Schema(
    {
        UidUser: { type: String, required: true },
        IdProduct: { type: String, required: true },
        quantity_product: { type: Number, required: true },
        price_product: { type: Number, required: true },
        name_product: { type: String, required: true },
        category_product: { type: String, required: true },
        codeProduct: { type: String, required: true },
        status_purchase: { type: Boolean, required: true }
    }
);

export default model<IShopping>("Shopping", ShoppingSchema);