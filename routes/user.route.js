import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import {authMiddleware} from "./../middlewares/auth.middleware.js"
const userRouter = Router();
userRouter.get("/", getUsers);
userRouter.post("/", (req, res) => {
  res.send("Create new user");
});
userRouter.get("/:id", authMiddleware, getUser);
userRouter.put("/:id", (req, res) => {
  res.send("update spacific user");
});
userRouter.delete("/:id", (req, res) => {
  res.send("delete spacific user");
});
export default userRouter;
