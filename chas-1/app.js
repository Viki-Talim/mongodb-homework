const express = require("express");
const mongoose = require("mongoose");
const zemjodelieController = require("./controller/zemjodelieController");
// const Zemjodelie = require("./model/zemjodelieModel");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Vicky:<enter ur paswword></enter>@cluster0.7fu7yux.mongodb.net/semos1?appName=Cluster0",
  )
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => console.log(err.message));

app.get("/api/v1/zemjodelie", zemjodelieController.getAllZapisi);
app.post("/api/v1/zemjodelie", zemjodelieController.createZapis);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Successfully started backend");
});

// const testKompir = new Zemjodelie({
//   kultura: "Kompir",
//   opis: "Mlad kompir, organsko proizvodstvo",
//   kolicina: 800,
//   sezona: "Prolet",
// });
// const testPcenka = new Zemjodelie({
//   kultura: "Pcenka",
//   opis: "Hibridna pcenka za stocna hrana",
//   kolicina: 3000,
//   sezona: "Leto",
// });
// const testJabolka = new Zemjodelie({
//   kultura: "Jabolka",
//   opis: "Sorta Ajdared, crveni jabolka",
//   kolicina: 1500,
//   sezona: "Esen",
// });

// async function saveZemjodelie() {
//   try {
//     await testKompir.save();
//     await testPcenka.save();
//     await testJabolka.save();
//     console.log("Uspesno dodadovte");
//   } catch (err) {
//     console.log(err);
//   }
// }

// saveZemjodelie();
