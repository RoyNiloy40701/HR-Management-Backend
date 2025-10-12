import Employee from "../models/Employee.js";
import User from "../models/User.js";

export const addEmployee = async (req, res) => {
	try {
		const employee = await Employee.create(req.body);
		res.status(201).json({ message: "Employee  Added", employee });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllEmployee = async (req, res) => {
	try {
		const employee = await Employee.find().populate("user department");
		if (employee.length === 0) {
			return res.status(404).json({ message: "No employee found" });
		}
		res.status(200).json(employee);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateEmployee = async (req, res) => {
	try {
		const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!employee) {
			return res.status(404).json({ message: "No employee found" });
		}
		res.status(200).json(employee);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteEmployee = async (req, res) => {
	try {
		const employee = await Employee.findById(req.params.id);
		if (!employee) {
			return res.status(404).json({ message: "Employee not found" });
		}

		if (employee.user) {
			await User.findByIdAndDelete(employee.user);
		}

		await Employee.findByIdAndDelete(req.params.id);

		res.status(200).json({ message: "Employee deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getEmployeeByID = async (req, res) => {
	try {
		const employee = await Employee.findById(req.params.id).populate(
			"user department"
		);
		if (!employee) {
			return res.status(404).json({ message: "No employee found" });
		}
		res.status(200).json(employee);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
