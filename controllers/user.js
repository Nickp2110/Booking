import User from "../models/User.js";

//create

//update
export const updateuser = async (req,res,next)=>{
    try {
        const updateduser = await User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true});
        res.status(200).json(updateduser);
    } catch (error) {
        next(error);
    }
}

//delete
export const deleteuser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(
        req.params.id);
        res.status(200).json("you can delete");
    } catch (error) {
        next(error);
    }
}

//get
export const getuser = async (req,res,next)=>{
    try {
        const user = await User.findById(
            req.params.id
        );
        res.status(200).json(user);
    } catch (error) { 
        next(error);
    }
}

//getall
export const getusers = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err)
    }
}

