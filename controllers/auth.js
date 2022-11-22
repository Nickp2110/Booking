import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//create
export const createuser = async (req,res,next) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User ({
        username: req.body.username,
        email: req.body.email,
        password: hash})
    try {
        await newUser.save()
        res.status(200).json("user has been created.")
    } catch (error) {
        next(error)
    }
}

//Login
export const Login = async (req,res,next) =>{
    try {
        const user = await User.findOne({username:req.body.username})
        if (!user) return next(createError(404,"user not found"))

        const ispasswordcorrect = await bcrypt.compare(req.body.password, user.password)
        if(!ispasswordcorrect) return next(createError(403,"wrong password"))

        const token = jwt.sign({id:user._id, isadmin:user.isadmin}, process.env.JWT)

        const { password, isadmin, ...otherdetails } = user._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherdetails})
    } catch (Error) {
        next(Error)
    }
}

