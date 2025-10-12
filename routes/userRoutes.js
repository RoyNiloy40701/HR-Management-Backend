import express from "express";
import {
	addUser,
	deleteUser,
	getAllUser,
	getUserByID,
	updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUser);
router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;
