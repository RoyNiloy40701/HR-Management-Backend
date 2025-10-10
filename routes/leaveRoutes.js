import express from "express";
import {
	addLeave,
	deleteLeave,
	getAllLeave,
	updateLeave,
} from "../controllers/leaveController.js";

const router = express.Router();

router.post("/leave", addLeave);
router.get("/leave", getAllLeave);
router.put("/leave/:id", updateLeave);
router.delete("/leave/:id", deleteLeave);

export default router;
