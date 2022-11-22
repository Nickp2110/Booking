import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
const app = express()
dotenv.config()

app.listen(8080, ()=>{
    console.log("connected to backend!")
})

try{
    mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB")
}catch (error) {
    throw(error)
}

mongoose.connection.on("disconnected", () =>{
    console.log("mongodb is disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongodb is connected")
})

app.get("/",(req,res)=>{
    res.send("hello")
})

//middlewares

app.use(cookieParser())
app.use(express.json())

app.use("/auth",authRoute);
app.use("/hotels",hotelsRoute);
app.use("/rooms",roomsRoute);
app.use("/users",usersRoute);

app.use((err, req, res, next)=>{
    const errorstatus = err.status || 500;
    const errormessage = err.message || "something went wrong!";
    return res.status(500).json({
        success:false,
        status: errorstatus,
        message: errormessage,
        stack: err.stack,    
    });
})
