import joi from "joi"
import { AddMovie, EditMovie } from "../protocols/movie-type"

export const movieSchema = joi.object<AddMovie>({
    gender:joi.string().required().max(50),
    name: joi.string().required().max(100),
    stream_platform:joi.string().required().valid("Netflix","Prime")
})

export const editSchema = joi.object<EditMovie>({
    note: joi.string().max(100),
    resume:joi.string().max(200)
})