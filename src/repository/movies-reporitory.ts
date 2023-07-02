import db from "@/database/db.connection";
import { AddMovie, EditMovie, Movie } from "@/protocols/movie-type";

export async function getMovies(){
    const query=`SELECT * FROM movies`
    return db.query<Movie>(query)
}


export async function postMovie(movie : AddMovie){
    const {gender,name,stream_platform} = movie
    const query=`INSERT INTO movies (gender,name,stream_platform) VALUES ($1,$2,$3)`
    return db.query(query,[gender,name,stream_platform])
}

export async function editMovie(id : number,movie :EditMovie){
    const {note,resume} = movie
    const paramns:(number | string)[] = [id]
    let query:string = `UPDATE movies SET status='watched',`
    if(resume){
        paramns.push(resume)
        console.log(query)
        query += ` resume=$${paramns.length},`
    }
    if(note){
        paramns.push(note)
        query += ` note=$${paramns.length} `
    }
    query += `WHERE id=$1`

    return db.query(query,paramns)
}

export async function deleteMovie(id:number){
    const query = `DELETE FROM movies WHERE id=$1`
    return db.query(query,[id])
}
