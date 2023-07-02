import { NextFunction, Request, Response } from "express";
import { AppError } from "../protocols/error-type";
import httpStatus from "http-status";

export function errorHandling(error:AppError,req:Request,res:Response,next:NextFunction){
    if(error.name === "NotFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    console.log(error)
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
}