var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require('cors');
var logger = require("morgan");
var multer = require("multer");

var dbCon = require("./lib/db");

var userRoute = require("./route/user");
var employRoute = require("./route/employ");
var areaRoute = require("./route/area");
var surveyRoute = require("./route/survey");
var houseRoute = require("./route/house");
var meterRoute = require("./route/meter")
const roleRoute = require("./route/role.route")
const roughRoute = require("./route/rough.route")
var app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
  next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(multer().any());
app.use(cookieParser());


// Request Logger
if (app.get("env") === "development") {
  app.use(logger("dev"));
}

app.use("/user", userRoute);
app.use("/employ",employRoute);
app.use("/area",areaRoute);
app.use("/survey",surveyRoute);
app.use("/house",houseRoute);
app.use("/meter",meterRoute);
app.use("/role",roleRoute);
app.use("/rough",roughRoute);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;