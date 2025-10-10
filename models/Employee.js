import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
		position: { type: String },
		salary: { type: Number },
		joinDate: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
