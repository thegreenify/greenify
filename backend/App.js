const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const logger = require("morgan");
const multer = require("multer");

const dbCon = require("./lib/db");

const userRoute = require("./route/user");
const employRoute = require("./route/employ");
const areaRoute = require("./route/area");
const surveyRoute = require("./route/survey");
const houseRoute = require("./route/house");
const meterRoute = require("./route/meter")
const roleRoute = require("./route/role.route")
const roughRoute = require("./route/rough.route")
const app = express();
const __dirname = path.dirname("")
const buildPath = path.join(__dirname, "../frontend/build")

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

app.use(express.static(buildPath))
app.get("/*", function(req,res){
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function(err){
      if(err){
        res.status(500).send(err)
      }
    }
  )
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;