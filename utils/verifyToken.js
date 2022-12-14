import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(402,"you are not authenticated."))
    }
    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return next(createError(402,"Token is not valid."))
        req.user = user;
        next()
    })
}
 
export const verifyUser = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isadmin){
            next()
        }else{
            if(Error) return next(createError(404,"you are not authorized"))
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.isadmin){
            next()
        }else{
            if(Error) return next(createError(404,"you are not authorized admin"))
        }
    })
}