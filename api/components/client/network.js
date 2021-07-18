const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  controller
    .list()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error));
});

router.get("/:id", (req, res) => {
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error));
});

router.post("/", (req, res) => {
  controller
    .add(req.body)
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
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error));
});

module.exports = router;
