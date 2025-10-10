import express from "express";
import { addRole, getAllRole } from "../controllers/roleController.js";

const router = express.Router();

router.post("/role", addRole);
router.get("/role", getAllRole);

export default router;
