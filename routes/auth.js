import express from "express"
import { createuser, Login } from "../controllers/auth.js";
const router = express.Router();

//create
router.post("/", createuser);
router.post("/login", Login);


export default router