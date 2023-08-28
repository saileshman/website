const express = require("express");
const app = express();
const indexrouter = require("./Routers/index");

app.set("view engine", "ejs");
app.set("views", "Views");

app.use(express.static("Public"));
app.use(express.json());
app.use("/", indexrouter);
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something is wrong ...";
  res.status(500).send(err);
});
app.listen(1111);
console.log("app is running on port 1111");
