const router = require("express").Router();

const mailRouter = require("../Modules/mail/mail");
const qrRouter = require("../Modules/qrcode/qr");

router.use("/qr", qrRouter);
router.use("/mail", mailRouter);
module.exports = router;
