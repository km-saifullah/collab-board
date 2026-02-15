import mongoose from "mongoose";
import { mongodbUri } from "./index.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log("Database Connected...!");
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};
