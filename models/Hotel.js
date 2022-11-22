import mongoose from "mongoose"

const Hotelschema = new mongoose.Schema({
    Name:{
        type: String,
        required:true
    },
    Type:{
        type: String,
        required:true
    },
    City:{
        type: String,
        required:true
    },
    Address:{
        type: String,
        required:true
    },
    Distance:{
        type: String,
        required:true
    },
    Photos:{
        type:[ String],
    },
    Desc:{
        type: String,
        required:true
    },
    Rating:{
        type: Number,
        min:0,
        max:5
    },
    Rooms:{
        type: [String],
    },
    Title:{
        type: String,
        required:true
    },
    CheapestPrice:{
        type: Number,
        required:true
    },
    Featured:{
        type: Boolean,
        default: false
    },
})

export default mongoose.model("Hotel", Hotelschema)