import express from "express";
import {
	addRole,
	deleteRole,
	getAllRole,
	getRoleByID,
	updateRole,
} from "../controllers/roleController.js";

const router = express.Router();

router.post("/", addRole);
router.get("/", getAllRole);
router.get("/:id", getRoleByID);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

export default router;
