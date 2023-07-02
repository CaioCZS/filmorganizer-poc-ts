import * as moviesReporisoty from "@/repository/movies-reporitory"
import { AddMovie, EditMovie } from "../protocols/movie-type"

export async function getMovies(){
    const movies = moviesReporisoty.getMovies()
    return movies
}

export async function postMovie(movie : AddMovie){
    return moviesReporisoty.postMovie(movie)
}

export async function editMovie(id:number,movie:EditMovie){
    const result = await moviesReporisoty.editMovie(id,movie)
    if(result.rowCount === 0){
        throw{
            name:"NotFound",
            message:"Filme não encontrado"
        }
    }
    return result
}

export async function deleteMovie(id:number){
    const result = await moviesReporisoty.deleteMovie(id)
    if(result.rowCount === 0){
        throw{
            name:"NotFound",
            message:"Filme não encontrado"
        }
    }
    return result
}