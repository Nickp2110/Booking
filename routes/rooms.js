import express from "express"
import { createRoom, deleteRoom, getRoom, getrooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/:hotelId", verifyAdmin ,createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//getall
router.get("/", getrooms);

export default router