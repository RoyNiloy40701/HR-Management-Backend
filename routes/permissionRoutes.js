import express from "express";
import {
	addPermission,
	deletePermission,
	getAllPermission,
	getPermissionByID,
	updatePermission,
} from "../controllers/permissionController.js";

const router = express.Router();

router.post("/", addPermission);
router.get("/", getAllPermission);
router.put("/:id", updatePermission);
router.get("/:id", getPermissionByID);
router.delete("/:id", deletePermission);

export default router;
