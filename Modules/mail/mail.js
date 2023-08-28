const router = require("express").Router();
const mailService = require("../../Services/mailer"); //  import from service

router.post("/", async (req, res, next) => {
  try {
    const { message, to, subject } = req.body;
    const payload = {
      from: "saileshmankunwar2021@gmail.com",
      to: to,
      message,
      subject,
    };
    const mailResponse = await mailService.sendMail(payload);
    res.json({ data: mailResponse }); // whole data work on json so give json
  } catch (e) {
    next(e);
  }
});

module.exports = router;
