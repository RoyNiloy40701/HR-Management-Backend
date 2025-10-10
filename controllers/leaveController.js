import Leave from "../models/Leave.js";

export const addLeave = async (req, res) => {
	try {
		const leave = await Leave.create(req.body);
		res.status(201).json({ message: "Leave Applied", leave });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllLeave = async (req, res) => {
	try {
		const leave = await Leave.find().populate("employee");
		if (leave.length === 0) {
			return res.status(404).json({ message: "No Leave Application found" });
		}
		res.status(200), json({ data: leave });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateLeave = async (req, res) => {
	try {
		const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!leave) {
			return res.status(404).json({ message: "No Leave Application found" });
		}
		res.status(200), json({ data: leave });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteLeave = async (req, res) => {
	try {
		const leave = await Leave.findByIdAndDelete(req.params.id);
		if (!leave) {
			return res
				.status(404)
				.json({ message: "Leave Application delete Successfully" });
		}
		res.status(200), json({ data: leave });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
