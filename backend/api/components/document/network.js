const express = require("express");
const response = require("../../../network/response");
const path = require("path");
const multer = require("multer");
const controller = require("./index");
const router = express.Router();

const storage = multer.diskStorage({
  destination: __dirname + "/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  //Usado en enlistar todos los datos, y al realizar la busqueda
  controller
    .list()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.get("/:id", (req, res) => {
  //Usado para cuando queramos editar o borrar uno
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.post("/", upload.single("document"), (req, res) => {
  controller
    .upsert(req.body, req.file, true)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.delete("/:id", (req, res) => {
  controller
    .deleted(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

module.exports = router;
