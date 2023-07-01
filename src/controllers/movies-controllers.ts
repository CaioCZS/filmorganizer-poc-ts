import { Request, Response } from "express";

export async function getMovies(req:Request,res:Response){
    res.send("getMovies")
}

export async function postMovies(req:Request,res:Response){
    res.send("postMovies")
}

export async function updateMovies(req:Request,res:Response){
    res.send("updateMovies")
}

export async function deleteMovies(req:Request,res:Response){
    res.send("deleteMovies")
}