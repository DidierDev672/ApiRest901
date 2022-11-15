import express = require("express");// EsModule y commonJS
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", function(_req, res){
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404);
});

router.post("/", function(req, res){
    try{
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diaryServices.addDarie(newDiaryEntry);

        res.json(addedDiaryEntry);
    }catch(error){
        res.status(400).send(error);
    }
});

export default router;