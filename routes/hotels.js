import express from "express"
import { createhotel, deletehotel, gethotel, gethotels, updatehotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createhotel);
//UPDATE
router.put("/:id", verifyAdmin, updatehotel);
//delete
router.delete("/:id", verifyAdmin, deletehotel);
//get
router.get("/:id", gethotel);
//getall
router.get("/", gethotels);

export default router;