const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  ime: { type: String, required: true },
  vinarija: String,
  cena: Number,
  opis: String,
});

module.exports = mongoose.model("Wine", wineSchema);