import express from "express";
import {
	addDepartment,
	getAllDepartment,
} from "../controllers/departmentController.js";

const router = express.Router();

router.post("/department", addDepartment);
router.get("/department", getAllDepartment);

export default router;
