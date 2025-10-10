import Department from "../models/Department.js";

export const addDepartment = async (req, res) => {
	try {
		const department = await Department.create(req.body);
		res.status(201).json({ message: "Department  Added", department });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllDepartment = async (req, res) => {
	try {
		const department = await Department.find();
		if (department.length === 0) {
			return res.status(404).json({ message: "No department found" });
		}
		res.status(200), json({ data: department });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
