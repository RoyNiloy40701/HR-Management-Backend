import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
const otpStore = [];

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "niloyroyaiub@gmail.com",
		pass: "jvfgwavvsetdghvj",
	},
});

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email }).populate({
			path: "role",
			populate: { path: "permissions" },
		});
		if (!user) return res.status(400).json({ message: "User not found" });

		const match = await bcrypt.compare(password, user.password);
		if (!match) return res.status(400).json({ message: "Invalid credentials" });

		const otp = Math.floor(100000 + Math.random() * 900000).toString();
		otpStore[user._id] = otp;

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: user.email,
			subject: "Your Login OTP",
			text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
		});

		// const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		// 	expiresIn: 3600,
		// });
		// res.status(200).json({
		// 	message: "Login successful",
		// 	user: user,
		// 	token,
		// });
		res.status(200).json({
			message: "OTP sent to email",
			userId: user._id,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const verifyOTP = async (req, res) => {
	try {
		const { userId, otp } = req.body;

		if (!otpStore[userId] || otpStore[userId] !== otp)
			return res.status(400).json({ message: "Invalid or expired OTP" });

		delete otpStore[userId];

		const user = await User.findById(userId).populate({
			path: "role",
			populate: { path: "permissions" },
		});

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: 3600,
		});

		res.status(200).json({
			message: "Login successful",
			user: user,
			token,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
