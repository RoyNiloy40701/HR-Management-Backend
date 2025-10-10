import mongoose from "mongoose";

const connectDataBase = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Database connected  successfully");
	} catch (error) {
		console.log("Database connection error", error.message);
	}
};

export default connectDataBase;
