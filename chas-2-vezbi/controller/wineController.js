const Wine = require("../model/wineModel");

exports.getAllWines = async (req, res) => {
  try {
    const wines = await Wine.find();
    res.render("index", { title: "Mojata Vinarska Kolekcija", wines: wines });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createWine = async (req, res) => {
  try {
    await Wine.create(req.body); 
    res.redirect("/wines");  
  } catch (err) {
    res.status(400).send("Error");
  }
};
exports.deleteWine = async (req, res) => {
    try {
        await Wine.findByIdAndDelete(req.params.id);
        res.redirect("/wines");
    } catch (err) {
        res.status(500).send("Error");
    }
};
exports.updateWine = async (req, res) => {
    try {
        await Wine.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/wines");
    } catch (err) {
        res.status(500).send("Error");
    }
};
exports.getEditForm = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        res.render("edit", { wine: wine }); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};