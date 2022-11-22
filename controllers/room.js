import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//create room
export const createRoom = async (req,res,next) =>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)
    try {
        const savedroom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {Rooms: savedroom._id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedroom)
    } catch (error) {
        next (error)
    }
}

//update
export const updateRoom = async (req,res,next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true});
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
}

//delete
export const deleteRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelId
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {Rooms:req.params.id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json("room deleted");
    } catch (error) {
        next(error);
    }
}

//get
export const getRoom = async (req,res,next)=>{
    try {
        const room = await Room.findById(
            req.params.id
        );
        res.status(200).json(room);
    } catch (error) { 
        next(error);
    }
}

//getall
export const getrooms = async (req,res,next)=>{
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err)
    }
}


