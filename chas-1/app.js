const express = require("express");
const mongoose = require("mongoose");
const zemjodelieController = require("./controller/zemjodelieController");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb+srv://Vicky:<UR PASWORD></pASWORD>>@cluster0.7fu7yux.mongodb.net/semos1?appName=Cluster0")
  .then(() => {
    console.log("Succesfully conected");
  })
  .catch((err) => console.log(err.message));

app.get("/api/v1/zemjodelie", zemjodelieController.getAllZapisi);
app.post("/api/v1/zemjodelie", zemjodelieController.createZapis);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Successfully started backend");
});


