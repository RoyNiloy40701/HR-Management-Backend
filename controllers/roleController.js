import Role from "../models/Role.js";

export const addRole = async (req, res) => {
	try {
		const { name, permissionIds } = req.body;
		const role = await Role.create({ name, permissions: permissionIds });
		res.status(201).json({ message: "Role Added", role });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllRole = async (req, res) => {
	try {
		const role = await Role.find().populate("permission");
		if (role.length === 0) {
			return res.status(404).json({ message: "No role found" });
		}
		res.status(200), json({ data: role });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
