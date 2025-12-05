import mongoose from "mongoose";
import User from "./../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { EXPIRY_TIME, JWT_SECRET } from "../config/env.js";
export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUsers = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log("New user :", newUsers);
    const token = jwt.sign({ userId: newUsers._id }, JWT_SECRET, {
      expiresIn: EXPIRY_TIME,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUsers,
      data: token,
    });
  } catch (err) {
    next(err);
  }
};
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      throw error;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      const error = new Error("Wrong password");
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: EXPIRY_TIME,
    });
    res.status(200).json({
      success: true,
      message: "Weclome to the application",
      user: user,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};
const signOut = () => {};
