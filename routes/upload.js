var express = require("express");
var router = express();
multer = require("multer");
// const upload = multer({ dest: './public/data/uploads/' })

// File upload settings
const PATH = "./public/uploads";
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
let upload = multer({
  storage: storage,
});

router.post("/upload", upload.single("files"), function (req, res) {
  try {
    if (!req.file) {
      console.log("No file is available!");
      return res.status(404).send("Not FOund");
    } else {
      console.log("File is available!");
      console.log(req.body.dataId);
      return res.status(200).send({ file: req.file, body: req.body });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});
// router.post("/upload", function (req, res) {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading.
//     } else if (err) {
//       // An unknown error occurred when uploading.
//     }

//     // Everything went fine.
//   });
// });

module.exports = router;
