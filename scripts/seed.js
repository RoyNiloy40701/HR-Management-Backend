import dotenv from "dotenv";
import connectDataBase from "../config/db.js";
import Permission from "../models/Permission.js";
import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

async function seed() {
	await connectDataBase();
	await Permission.deleteMany();
	await Role.deleteMany();
	await User.deleteMany();

	const permissions = await Permission.insertMany([
		{ name: "manage_permissions" },
		{ name: "manage_roles" },
		{ name: "manage_users" },
		{ name: "add_employee" },
		{ name: "view_employee" },
		{ name: "add_department" },
		{ name: "view_department" },
		{ name: "apply_leave" },
		{ name: "approve_leave" },
		{ name: "view_leaves" },
	]);

	const role = await Role.create({ name: "superadmin", permissions });
	const hashed = await bcrypt.hash("superpassword", 10);

	await User.create({
		name: "Super Admin",
		email: "admin@example.com",
		password: hashed,
		role: role._id,
	});

	console.log("✅ Seeded Super Admin: admin@example.com / superpassword");
	process.exit(0);
}

seed();
