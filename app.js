import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to the subscription based API");
});
app.listen(3000, () => {
  console.log("Server running at port 3000");
});
