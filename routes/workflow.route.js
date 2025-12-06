import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller.js";
const wrokflowRouter = Router();

wrokflowRouter.get("/", sendReminders);
export default wrokflowRouter;