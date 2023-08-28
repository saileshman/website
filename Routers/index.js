const router = require("express").Router();
const apiRouter = require("./api");
const uiRouter = require("./ui");

router.use("/api/v1", apiRouter);
router.get("/", uiRouter);
module.exports = router;
