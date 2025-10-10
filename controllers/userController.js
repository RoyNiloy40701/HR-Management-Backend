import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const addUser = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;
		const hashed = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, password: hashed, role });
		res.status(201).json({ message: "user Added", user });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllUser = async (req, res) => {
	try {
		const user = await User.find().populate("role");
		if (user.length === 0) {
			return res.status(404).json({ message: "No user found" });
		}
		res.status(200), json({ data: user });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
