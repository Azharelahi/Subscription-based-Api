import express from "express";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/subscription.route.js";
import { PORT } from "./config/env.js";
import  cookieParser  from "cookie-parser";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Welcome to the subscription based API");
});
app.listen(PORT, async () => {
  console.log("Server running at port ", PORT);
  await connectToDatabase();
});
