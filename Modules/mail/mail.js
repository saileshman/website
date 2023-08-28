const router = require("express").Router();

router.post("/", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

module.exports = router;
