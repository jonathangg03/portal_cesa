require("dotenv").config();

module.exports = {
  api: {
    host: process.env.API_HOST,
    port: process.env.API_PORT,
  },
  db: {
    uri: process.env.DB_URI,
  },
  secret: process.env.SECRET,
};
