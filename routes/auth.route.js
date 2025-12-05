import { Router } from "express";
import { signUp, signIn } from "./../controllers/auth.controller.js";
const authRouter = Router();
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.get("/sign-out", (req, res) => {
  res.send("Sign out route");
});
export default authRouter;
