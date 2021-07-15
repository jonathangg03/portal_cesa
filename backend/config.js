require("dotenv").config();

module.exports = {
  api: {
    host: process.env.API_HOST || "localhost",
    port: process.env.API_PORT || 3000,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  secret: process.env.SECRET,
};
