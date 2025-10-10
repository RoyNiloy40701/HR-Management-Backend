import express from "express";
import { addUser, getAllUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", addUser);
router.get("/user", getAllUser);

export default router;
