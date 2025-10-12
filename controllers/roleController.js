import Role from "../models/Role.js";

export const addRole = async (req, res) => {
	try {
		const { name, permissions } = req.body;
		const role = await Role.create({ name, permissions: permissions });
		res.status(201).json({ message: "Role Added", role });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllRole = async (req, res) => {
	try {
		const role = await Role.find().populate("permissions");
		if (role.length === 0) {
			return res.status(404).json({ message: "No role found" });
		}
		res.status(200).json(role);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateRole = async (req, res) => {
	try {
		const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!role) {
			return res.status(404).json({ message: "No role found" });
		}
		res.status(200).json(role);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteRole = async (req, res) => {
	try {
		const role = await Role.findByIdAndDelete(req.params.id);
		if (!role) {
			return res.status(404).json({ message: "Role delete Successfully" });
		}
		res.status(200).json(role);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getRoleByID = async (req, res) => {
	try {
		const role = await Role.findById(req.params.id).populate("permissions");
		if (!role) {
			return res.status(404).json({ message: "No role found" });
		}
		res.status(200).json(role);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
