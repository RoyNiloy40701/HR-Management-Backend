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

export const updateUser = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;
		const updateData = { name, email, role };
		const hashed = await bcrypt.hash(password, 10);
		if (password) {
			const hashed = await bcrypt.hash(password, 10);
			updateData.password = await bcrypt.hash(password, hashed);
		}

		const user = await User.findByIdAndUpdate(req.params.id, updateData, {
			new: true,
		});
		if (!user) {
			return res.status(404).json({ message: "No user found" });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User delete Successfully" });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getUserByID = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate("permissions");
		if (!user) {
			return res.status(404).json({ message: "No user found" });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
