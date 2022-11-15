import {  NewProductEntry } from "./types";
import {  Category } from "./enums";

const parseDescription = (descriptionFromRequest: any): string => {
    if(!isString(descriptionFromRequest)){
        throw new Error("Incorrect or missing description");
    }

    return  descriptionFromRequest;
};

const parseNameProduct = (nameproductFromRequest: any): string => {
    if(!isString(nameproductFromRequest)){
        throw new Error("Incorrect or missing name product");
    }

    return nameproductFromRequest;
};

const parseQuantity = (quantityFromRequest: any): number => {
    if(!isNumber(quantityFromRequest)){
        throw new Error("Incorrect or missing quantity");
    }

    return quantityFromRequest;
};

const parsePrice = (priceFromRequest: any):  number => {
    if(!isNumber(priceFromRequest)){
        throw new Error("Incorrect or missing price");
    }

    return priceFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error("Incorrect or missing date");
    }

    return dateFromRequest;
};

const parseCategory = (CategoryFromRequest: any): Category => {
    if(!isString(CategoryFromRequest) || !isCategory(CategoryFromRequest)){
        throw new Error("Incorrect or missing Weather");
    }

    return CategoryFromRequest;
};


const isCategory = (param: any): boolean => {
    return Object.values(Category).includes(param);
};

const isString = (string: string): boolean => {
    return typeof string === "string";
};

const isDate = (string: string): boolean => {
    return typeof string === "string";
};

const isNumber = (number: number): boolean => {
    return typeof number === "number";
};


const toNewDiaryEntry = (object:any): NewProductEntry => {
    const newEntry: NewProductEntry = {
        description: parseDescription(object.description),
        name_product: parseNameProduct(object.name_product),
        quantity: parseQuantity(object.quantity),
        price: parsePrice(object.price),
        date_entry: parseDate(object.date_entry),
        category: parseCategory(object.category),
    };

    return newEntry;
};

export default toNewDiaryEntry;