import {
	addEmployee,
	getAllEmployee,
} from "../controllers/employeeController.js";
import express from "express";

const router = express.Router();

router.post("/employee", addEmployee);
router.get("/employee", getAllEmployee);

export default router;
