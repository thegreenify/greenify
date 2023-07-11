const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./route/user");
const employRoute = require("./route/employ");
const areaRoute = require("./route/area");
const surveyRoute = require("./route/survey");
const houseRoute = require("./route/house");
const meterRoute = require("./route/meter");
const roleRoute = require("./route/role.route");
const roughRoute = require("./route/rough.route");
const app = express();
const path = require("path");
// const __dirname = path.dirname("")
//the above supposed to be commented as the __dirname is already declared below

const buildPath = path.join(__dirname, "../frontend/build");

require("dotenv").config();
app.use(cors({ origin: "*" }));
app.use(express.json());

const mongoURI = process.env.DB_URL;

//last thing left is using the xl

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/users", userRoute);
app.use("/employ", employRoute);
app.use("/area", areaRoute);
app.use("/survey", surveyRoute);
app.use("/house", houseRoute);
app.use("/meter", meterRoute);
app.use("/role", roleRoute);
app.use("/rough", roughRoute);

app.use(express.static(buildPath));
app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
