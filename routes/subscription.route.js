import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.json({ title: "Get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.json({ title: "Get specific subscription", id: req.params.id });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.json({
    title: "Get all subscriptions of the user",
    userId: req.params.id,
  });
});

subscriptionRouter.post("/", authMiddleware,createSubscription)

subscriptionRouter.delete("/:id", (req, res) => {
  res.json({ title: "Delete a subscription", id: req.params.id });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.json({
    title: "Update a specific subscription",
    id: req.params.id,
    body: req.body,
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.json({ title: "Cancel a specific subscription", id: req.params.id });
});

subscriptionRouter.get("/upcoming-sub", (req, res) => {
  res.json({ title: "Get upcoming renewals" });
});

export default subscriptionRouter;
