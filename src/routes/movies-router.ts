import { Router } from "express";
import * as moviesControllers from "@/controllers/movies-controllers"
import schemaValidation from "@/middlewares/schema-validation";
import { editSchema, movieSchema } from "@/schemas/movie-schema";
const moviesRouter = Router()

moviesRouter.get("/movies",moviesControllers.getMovies)
moviesRouter.post("/movies",schemaValidation(movieSchema),moviesControllers.postMovies)
moviesRouter.put("/movies/:id",schemaValidation(editSchema),moviesControllers.updateMovies)
moviesRouter.delete("/movies/:id",moviesControllers.deleteMovies)

export default moviesRouter