import connectDataBase from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import leaveRoutes from "./routes/leaveRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDataBase();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/leave", leaveRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/department", departmentRoutes);

app.get("/", (req, res) => res.send("HR Management API Running ✅"));

export default app;
