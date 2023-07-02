import express,{Request, Response, json} from "express"
import "express-async-errors"
import httpStatus from "http-status"
import moviesRouter from "@/routes/movies-router"
import { errorHandling } from "./middlewares/errro-handling"


const app = express()

app.use(json())

app.get("/health", (req:Request,res:Response) =>{
    res.sendStatus(httpStatus.OK)
})

app.use(moviesRouter)
app.use(errorHandling)

const PORT : number = 5000

app.listen(PORT, ()=>{console.log(`app is running in port ${PORT}`)})