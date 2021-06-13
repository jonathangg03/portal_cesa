const express = require("express");
const response = require("../../../network/response");
const controller = require("./index");
const router = express.Router();

router.post("/", (req, res) => {
  controller
    .login(req.body)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

module.exports = router;
