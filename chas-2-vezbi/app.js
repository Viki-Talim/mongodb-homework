const express = require("express");
const mongoose = require("mongoose");
const wineController = require("./controller/wineController");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://Vicky:<UR PASWORD></PASWORD>@cluster0.7fu7yux.mongodb.net/semos1?appName=Cluster0",
  )
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => console.log(err.message));


app.get("/wines", wineController.getAllWines);
app.get("/edit-wine/:id", wineController.getEditForm);

app.post("/add-wine", wineController.createWine);
app.post("/delete-wine/:id", wineController.deleteWine);
app.post("/update-wine/:id", wineController.updateWine);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Successfully started the backend");
});


