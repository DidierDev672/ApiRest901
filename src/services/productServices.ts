import { ProductEntry, NonSensitiveInfoProductEntry,NewProductEntry } from "../types";
import productsData from "./products.json";

const products: ProductEntry[] = productsData as ProductEntry[];

export const getEntries = (): ProductEntry[] => products;

export const findById = (id:number): NonSensitiveInfoProductEntry | undefined => {
    const entry = products.find(d => d.id === id);
    if(entry != null){
        const { description, ...restOfProduct } = entry;
        return restOfProduct;
    }

    return undefined;
};

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoProductEntry[] => {
    return products.map(({ id, quantity, price, name_product, category, description, date_entry  }) => {
        return {
            id,
            quantity,
            price,
            name_product,
            category,
            description,
            date_entry
        }
    })
};

export const addProduct = (newProductEntry: NewProductEntry): ProductEntry => {
    const newProduct = {
        id: Math.max(...products.map(d => d.id)) + 1,
        ...newProductEntry
    };

    products.push(newProduct);
    return newProduct;
};