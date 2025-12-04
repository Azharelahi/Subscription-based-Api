import express from "express";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/subscription.route.js";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.get("/", (req, res) => {
  res.send("Welcome to the subscription based API");
});
app.listen(PORT, async() => {
  console.log("Server running at port ", PORT);
  await connectToDatabase();
});
