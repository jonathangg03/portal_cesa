const express = require("express");
const response = require("../../../network/response");
const controller = require("./index");
const router = express.Router();

router.get("/", (req, res) => {
  controller
    .list()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.get("/:id", (req, res) => {
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.post("/", (req, res) => {
  controller
    .upsert(req.body, true)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

module.exports = router;
