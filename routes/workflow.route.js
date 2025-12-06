import { Router } from "express";
const wrokflowRouter = Router();

wrokflowRouter.get("/", (req, res) => {
    res.send("Workflow route");
});
export default wrokflowRouter;