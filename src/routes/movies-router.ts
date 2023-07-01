import { Router } from "express";
import * as moviesControllers from "@/controllers/movies-controllers"
const moviesRouter = Router()

moviesRouter.get("/movies",moviesControllers.getMovies)
moviesRouter.post("/movies",moviesControllers.postMovies)
moviesRouter.put("/movies",moviesControllers.updateMovies)
moviesRouter.delete("/movies",moviesControllers.deleteMovies)

export default moviesRouter