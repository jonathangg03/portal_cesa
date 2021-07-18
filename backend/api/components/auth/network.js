const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", (req, res) => {
  controller
    .login(req.body)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, error, error));
});

module.exports = router;
