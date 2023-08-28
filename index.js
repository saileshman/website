const express = require("express");
const app = express();
const indexrouter = require("./Routers/index");

app.use("/", indexrouter);
app.listen(1234);
console.log("app is running on port 1234");
