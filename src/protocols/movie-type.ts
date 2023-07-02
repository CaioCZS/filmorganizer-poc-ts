export type Movie = {
    id:number,
    name:string,
    stream_platform:string,
    status:string,
    gender:string,
    note?:string,
    resume?:string
}

export type AddMovie = Omit<Movie, "id"|"note"|"resume"|"status">
export type EditMovie = {
    note?:string,
    resume?:string
}