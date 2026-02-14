const Zemjodelie = require("../model/zemjodelieModel");

exports.createZapis = async (req, res) => {
  try {
    const novZapis = await Zemjodelie.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        zapis: novZapis,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.getAllZapisi = async (req, res) => {
  try {
    const siteZapisi = await Zemjodelie.find();
    res.status(201).json({
      status: "Success",
      results: siteZapisi.length,
      data: { zapisi: siteZapisi },
    });
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};
