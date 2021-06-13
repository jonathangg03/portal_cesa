const jwt = require("jsonwebtoken");
const config = require("../../config");
const secret = config.secret;

const sign = (payload) => {
  return jwt.sign(payload, secret);
};

module.exports = { sign };
