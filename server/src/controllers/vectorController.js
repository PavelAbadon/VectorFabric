import { Router } from "express";
import {vectorService} from "../services/index.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const vectorController = Router();

//UPLOAD Vetor
vectorController.post('/upload', async (req, res) => {
    const {
        title,
        description,
        vectorUrl,
        previewImageUrl,
        tags,
        category,
    } = req.body;

    const owner = req.user._id;

    try {
        const result = await vectorService.uploadVector(
            title,
            description,
            vectorUrl,
            previewImageUrl,
            tags,
            category,
            owner
        );

        res.status(201).json(result);

    } catch (err) {
        res.status(400).json({
            message: getErrorMessage(err)
        });
    }
});

export default vectorController;