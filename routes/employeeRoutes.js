import {
	addEmployee,
	deleteEmployee,
	getAllEmployee,
	getEmployeeByID,
	updateEmployee,
} from "../controllers/employeeController.js";
import express from "express";

const router = express.Router();

router.post("/", addEmployee);
router.get("/", getAllEmployee);
router.get("/:id", getEmployeeByID);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
