import { Router } from "express";
import {signUp} from "./../controllers/auth.controller.js";
const authRouter = Router();
authRouter.get("/sign-up", signUp);
authRouter.get("/sign-in", (req, res) => {
  res.send("Sign in route");
});
authRouter.get("/sign-out", (req, res) => {
  res.send("Sign out route");
});
export default authRouter;
