import { Category } from "./enums";

export interface ProductEntry {
    id: number,
    category: Category,
    name_product: string,
    quantity: number,
    price: number,
    description: string,
    date_entry: string,
};

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry,"visibility">;

export type NonSensitiveInfoProductEntry = Omit<ProductEntry, "description">;
export type NewProductEntry = Omit<ProductEntry, "id">;