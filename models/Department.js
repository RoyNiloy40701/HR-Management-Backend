import mongoose, { mongo } from "mongoose";

const departmentSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		//createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);

export default mongoose.model("Department", departmentSchema);
