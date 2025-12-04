import { Router } from "express";
const userRouter = Router();
userRouter.get("/", (req, res) => {
  res.send("Get all users");
});
userRouter.post("/", (req, res) => {
  res.send("Create new user");
});
userRouter.get("/:id", (req, res) => {
  res.send("get spacific user");
});
userRouter.put("/:id", (req, res) => {
  res.send("update spacific user");
});
userRouter.delete("/:id", (req, res) => {
  res.send("delete spacific user");
});
export default userRouter;
