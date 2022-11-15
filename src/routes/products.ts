import express from "express";
import * as  productServices from "../services/productServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(productServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (req, res) => {
    const newProductEntry = toNewDiaryEntry(req.body);
    const addedProductEntry = productServices.addProduct(newProductEntry);

    res.json(addedProductEntry);
});

export default router;