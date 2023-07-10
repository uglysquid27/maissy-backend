var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
const multer = require("multer");
var cors = require("cors");
const upload = multer();

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var authRouter = require("./routes/auth");
var emailRouter = require("./routes/email");
var uploadRouter = require("./routes/upload");

var app = express();
// app.use(cors({credentials: false, origin: '*'}));
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  // res.header("Access-Control-Allow-Credentials", "false");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(upload.none());
// app.post("/stats", upload.single('files'), function (req, res) {
//   // req.file is the name of your file in the form above, here 'uploaded_file'
//   // req.body will hold the text fields, if there were any
//   console.log(req.file, req.body);
//   return res.send(req.file)
// });

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.use("/email", emailRouter);
app.use("/upload", uploadRouter);

module.exports = app;
