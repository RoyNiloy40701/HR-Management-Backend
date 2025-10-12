import Permission from "../models/Permission.js";

export const addPermission = async (req, res) => {
	try {
		const permission = await Permission.create(req.body);
		res.status(201).json({ message: "Permission  Added", permission });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getAllPermission = async (req, res) => {
	try {
		const permission = await Permission.find();
		if (!permission) {
			return res.status(404).json({ message: "No permission found" });
		}
		res.status(200).json(permission);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getPermissionByID = async (req, res) => {
	try {
		const permission = await Permission.findById(req.params.id);
		if (!permission) {
			return res.status(404).json({ message: "No permission found" });
		}
		res.status(200).json(permission);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updatePermission = async (req, res) => {
	try {
		const permission = await Permission.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (!permission) {
			return res.status(404).json({ message: "No permission found" });
		}
		res.status(200).json(permission);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deletePermission = async (req, res) => {
	try {
		const permission = await Permission.findByIdAndDelete(req.params.id);
		if (!permission) {
			return res
				.status(404)
				.json({ message: "Permission delete Successfully" });
		}
		res.status(200).json(permission);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
