import { Router } from "express";
const authRouter = Router();
authRouter.get("/sign-up", (req, res) => {
  res.send("sign up route");
});
authRouter.get("/sign-in", (req, res) => {
  res.send("Sign in route");
});
authRouter.get("/sign-out", (req, res) => {
  res.send("Sign out route");
});
export default authRouter;
