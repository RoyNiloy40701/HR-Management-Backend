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
		res.status(200), json({ data: employee });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
