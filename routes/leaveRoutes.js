import express from "express";
import {
	addLeave,
	deleteLeave,
	getAllLeave,
	getLeaveByID,
	updateLeave,
} from "../controllers/leaveController.js";

const router = express.Router();

router.post("/", addLeave);
router.get("/", getAllLeave);
router.get("/:id", getLeaveByID);
router.put("/:id", updateLeave);
router.delete("/:id", deleteLeave);

export default router;
