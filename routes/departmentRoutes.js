import express from "express";
import {
	addDepartment,
	deleteDepartment,
	getAllDepartment,
	getDepartmentByID,
	updateDepartment,
} from "../controllers/departmentController.js";

const router = express.Router();

router.post("/", addDepartment);
router.get("/", getAllDepartment);
router.put("/:id", updateDepartment);
router.get("/:id", getDepartmentByID);
router.delete("/:id", deleteDepartment);

export default router;
