import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT;

export const mongodbUri = process.env.MONGO_URI;

export const clientUrl = process.env.CLIENT_URL;

export const jwtSecret = process.env.JWT_SECRET;
