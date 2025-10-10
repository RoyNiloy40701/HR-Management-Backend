import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email }).populate("role");
		if (!user) return res.status(400).json({ message: "User not found" });

		const match = await bcrypt.compare(password, user.password);
		if (!match) return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: 3600,
		});
		res.status(200).json({
			message: "Login successful",
			data: user,
			token,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
