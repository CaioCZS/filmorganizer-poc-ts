import { Request, Response } from "express";
import * as moviesService from "@/services/movies-service"
import httpStatus from "http-status";
import { AddMovie, EditMovie } from "@/protocols/movie-type";

export async function getMovies(req:Request,res:Response){
    const {rows : movies} = await moviesService.getMovies()
    res.send(movies)
}

export async function postMovies(req:Request,res:Response){
    const movie = req.body as AddMovie
    await moviesService.postMovie(movie)
    res.status(httpStatus.CREATED).send("Filme adicionado com sucesso")
}

export async function updateMovies(req:Request,res:Response){
    const id :number = Number(req.params.id)
    const movie = req.body as EditMovie
    await moviesService.editMovie(id,movie)
    res.send("Atualizado com sucesso")
}

export async function deleteMovies(req:Request,res:Response){
    const id :number = Number(req.params.id) 
    await moviesService.deleteMovie(id)
    res.send("Filme deletado com sucesso")
}