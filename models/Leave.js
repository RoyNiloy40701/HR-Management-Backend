import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
	{
		employee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		fromDate: { type: Date },
		toDate: { type: Date },
		reason: { type: String },
		status: {
			type: String,
			enum: ["Pending", "Approved", "Rejected"],
			default: "Pending",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Leave", leaveSchema);
