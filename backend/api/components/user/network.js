const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");
const auth = require("../auth/controller");
const { nanoid } = require("nanoid");
const router = express.Router();

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

router.post("/", (req, res) => {
  const id = nanoid();
  controller
    .add(req.body)
    .then((data) => {
      auth
        .add(req.body, data._id)
        .then((data) => console.log(data))
        .catch((error) => response.error(req, res, error));
      response.success(req, res, data, 200);
    })
    .catch((error) => response.error(req, res, error, error));
});

module.exports = router;
