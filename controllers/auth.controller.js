import mongoose from "mongoose";
import User from "./../models/user.model.js";
export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, email, password } = req.body;
    const userExist = await User.FindOne({ email });
    if (userExist) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    next(err);
  }
};
const signIn = () => {};
const signOut = () => {};
