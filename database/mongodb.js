import mongoose from "mongoose";
import { DATABASE_URI, NODE_ENV } from "../config/env.js";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("MongoDB connected in", NODE_ENV, "mode");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
export default connectToDatabase;
