import express,{Request, Response, json} from "express"
import httpStatus from "http-status"
import moviesRouter from "@/routes/movies-router"


const app = express()

app.use(json())

app.get("/health", (req:Request,res:Response) =>{
    res.sendStatus(httpStatus.OK)
})

app.use(moviesRouter)

const PORT : number = 5000

app.listen(PORT, ()=>{console.log(`app is running in port ${PORT}`)})