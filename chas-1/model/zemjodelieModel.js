const mongoose = require("mongoose");

const zemjodelieSchema = new mongoose.Schema({
  kultura: {
    type: String,
    required: [true, "Mora da ima ime na kulturata"],
  },
  opis: {
    type: String,
    required: [true, "Mora da ima opis"],
  },
  kolicina: {
    type: Number,
    default: 0,
  },
  sezona: {
    type: String,
    enum: ["Prolet", "Leto", "Esen", "Zima"],
  },
  datumNaSadenje: {
    type: Date,
    default: Date.now,
  },
});

const Zemjodelie = mongoose.model("Zemjodelie", zemjodelieSchema);

module.exports = Zemjodelie;
