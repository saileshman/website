const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { homepage: "QR code " });
});

module.exports = router;
