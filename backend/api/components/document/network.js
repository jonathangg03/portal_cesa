const express = require("express");
const response = require("../../../network/response");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const controller = require("./controller");
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
    .catch((error) => response.error(req, res, error));
});

router.get("/:id", (req, res) => {
  //Usado para cuando queramos editar o borrar uno
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error));
});

router.post("/", upload.single("fileD"), (req, res) => {
  controller
    .add(req.body, req.file)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error));
});

router.put("/:id", (req, res) => {
  controller
    .update(req.body, req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error));
});

router.delete("/:id", (req, res) => {
  controller
    .deleted(req.params.id)
    .then((data) => {
      fs.unlink(`${__dirname}/uploads/${data.filename}`, (err) => {
        if (err) console.log(`[Delete error]: ${err}`);
        else console.log("Registro eliminado");
      });
      response.success(req, res, "Registro eliminado correctamente", 200);
    })
    .catch((error) => response.error(req, res, error));
});

module.exports = router;
