import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database Connected...!");
  } catch (error) {
    console.log("Error:",error.message);
    process.exit(1);
  }
};
