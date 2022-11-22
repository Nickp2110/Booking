import Hotel from "../models/Hotel.js";

//create
export const createhotel = async (req,res,next)=>{
    const newhotel = new Hotel(req.body);
    try {
        const savedhotel = await newhotel.save()
        res.status(200).json(savedhotel);
    } catch (error) {
        next(error);
    }
}

//update
export const updatehotel = async (req,res,next)=>{
    try {
        const updatedhotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true});
        res.status(200).json(updatedhotel);
    } catch (error) {
        next(error);
    }
}

//delete
export const deletehotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(
        req.params.id);
        res.status(200).json("hotel deleted");
    } catch (error) {
        next(error);
    }
}

//get
export const gethotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    } catch (error) { 
        next(error);
    }
}

//getall
export const gethotels = async (req,res,next)=>{
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
}

