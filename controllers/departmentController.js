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
		if (!department) {
			return res.status(404).json({ message: "No department found" });
		}
		res.status(200).json(department);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getDepartmentByID = async (req, res) => {
	try {
		const department = await Department.findById(req.params.id);
		if (!department) {
			return res.status(404).json({ message: "No department found" });
		}
		res.status(200).json(department);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateDepartment = async (req, res) => {
	try {
		const department = await Department.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (!department) {
			return res.status(404).json({ message: "No department found" });
		}
		res.status(200).json(department);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteDepartment = async (req, res) => {
	try {
		const department = await Department.findByIdAndDelete(req.params.id);
		if (!department) {
			return res
				.status(404)
				.json({ message: "Department delete Successfully" });
		}
		res.status(200).json(department);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
