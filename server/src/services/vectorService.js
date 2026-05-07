import Vector from "../models/Vector.js";

export async function uploadVector(
    title,
    description,
    vectorUrl,
    previewImageUrl,
    tags,
    category,
    owner,
    ) {
        
    const existingVector = await Vector.findOne({
        title: new RegExp(`^${title}$`, "i"),
    });

    if (existingVector) {
        throw new Error("Vector with this title already exists");
    }

    const vector = await Vector.create({
        title,
        description,
        vectorUrl,
        previewImageUrl,
        tags,
        category,
        owner,
    });

    return vector;
    }
