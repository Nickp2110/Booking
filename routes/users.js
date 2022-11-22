import express from "express"
import { deleteuser, getuser, getusers, updateuser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//create
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("you are logged in.")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("you are logged in and you can delete your account.")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("you are logged in and you can delete all account.")
// })

//UPDATE
router.put("/:id", updateuser);
//delete
router.delete("/:id", deleteuser);
//get
router.get("/:id", getuser);
//getall
router.get("/", getusers);

export default router