const router = require("express").Router();
const qrController = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) throw new Error("url is required");
    const qr = await qrController.toDataURL(url);
    res.json({ data: qr });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
